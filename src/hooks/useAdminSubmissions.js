import { useState, useEffect, useCallback } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  orderBy,
  query,
  writeBatch,
} from "firebase/firestore";
import { db } from "../firebase";
import {
  hasAttachments,
  downloadFile,
  convertToCSV,
} from "../utils/submissionUtils";

const initialStorageInfo = {
  used: 0,
  total: 1000,
  percentage: 0,
  submissions: 0,
  filesSize: 0,
};

const initialExportOptions = {
  format: "json",
  includeFiles: true,
  dateRange: "all",
  submissionTypes: ["enquiry", "quote"],
};

export function useAdminSubmissions() {
  const [enquirySubmissions, setEnquirySubmissions] = useState([]);
  const [quoteSubmissions, setQuoteSubmissions] = useState([]);
  const [allEnquiries, setAllEnquiries] = useState([]);
  const [allQuotes, setAllQuotes] = useState([]);
  const [submissionSearchTerm, setSubmissionSearchTerm] = useState("");
  const [submissionFilter, setSubmissionFilter] = useState("all");
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [dateFilter, setDateFilter] = useState("all");
  const [customDateRange, setCustomDateRange] = useState({ start: "", end: "" });
  const [sourceFilter, setSourceFilter] = useState("all");
  const [buildingTypeFilter, setBuildingTypeFilter] = useState("all");
  const [hasAttachmentsFilter, setHasAttachmentsFilter] = useState("all");
  const [selectedSubmissions, setSelectedSubmissions] = useState([]);
  const [bulkLoading, setBulkLoading] = useState(false);
  const [storageInfo, setStorageInfo] = useState(initialStorageInfo);
  const [showStorageModal, setShowStorageModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportOptions, setExportOptions] = useState(initialExportOptions);

  const sendStorageAlert = useCallback((percentage, usedMB, submissionsCount, filesSizeMB) => {
    const message =
      "🚨 *STORAGE ALERT*\n\n" +
      `📊 Usage: ${percentage.toFixed(1)}% (${usedMB.toFixed(1)}MB / 1GB)\n` +
      `📝 Submissions: ${submissionsCount}\n` +
      `📎 Files: ${(filesSizeMB || 0).toFixed(1)}MB\n\n` +
      (percentage > 95 ? "🔥 CRITICAL: Storage almost full!" : percentage > 90 ? "⚠️ WARNING: Storage running low" : "") +
      "\n\nPlease clean up old submissions or upgrade storage.";
    console.log("Storage alert:", message);
  }, []);

  const calculateStorageInfo = useCallback(
    (submissions) => {
      let totalSize = 0;
      let filesSize = 0;
      submissions.forEach((submission) => {
        totalSize += JSON.stringify(submission).length;
        if (submission.attachments?.length > 0) {
          submission.attachments.forEach((file) => {
            filesSize += file.fileSize || 0;
          });
        }
        if (submission.attachment?.fileSize) {
          filesSize += submission.attachment.fileSize;
        }
      });
      totalSize += filesSize;
      const totalMB = totalSize / (1024 * 1024);
      const percentage = (totalMB / 1000) * 100;
      setStorageInfo({
        used: totalMB,
        total: 1000,
        percentage: Math.min(percentage, 100),
        submissions: submissions.length,
        filesSize: filesSize / (1024 * 1024),
      });
      if (percentage > 90) {
        sendStorageAlert(percentage, totalMB, submissions.length, filesSize / (1024 * 1024));
      }
    },
    [sendStorageAlert]
  );

  const fetchSubmissions = useCallback(async () => {
    try {
      let enquiries, quotes;
      try {
        const enquiryQuery = query(
          collection(db, "enquiry_submissions"),
          orderBy("timestamp", "desc")
        );
        const enquirySnapshot = await getDocs(enquiryQuery);
        enquiries = enquirySnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
      } catch (orderByError) {
        const snapshot = await getDocs(collection(db, "enquiry_submissions"));
        enquiries = snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
        enquiries.sort((a, b) => {
          const ta = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
          const tb = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(b.timestamp || 0);
          return tb - ta;
        });
      }
      setEnquirySubmissions(enquiries);
      setAllEnquiries(enquiries);

      try {
        const quoteQuery = query(
          collection(db, "quote_submissions"),
          orderBy("timestamp", "desc")
        );
        const quoteSnapshot = await getDocs(quoteQuery);
        quotes = quoteSnapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
      } catch (orderByError) {
        const snapshot = await getDocs(collection(db, "quote_submissions"));
        quotes = snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
        quotes.sort((a, b) => {
          const ta = a.timestamp?.toDate ? a.timestamp.toDate() : new Date(a.timestamp || 0);
          const tb = b.timestamp?.toDate ? b.timestamp.toDate() : new Date(b.timestamp || 0);
          return tb - ta;
        });
      }
      setQuoteSubmissions(quotes);
      setAllQuotes(quotes);
      calculateStorageInfo([...enquiries, ...quotes]);
    } catch (error) {
      console.error("Error fetching submissions:", error);
    }
  }, [calculateStorageInfo]);

  const applyAdvancedFilters = useCallback(() => {
    let filteredEnquiries = [...allEnquiries];
    let filteredQuotes = [...allQuotes];

    if (submissionSearchTerm) {
      const term = submissionSearchTerm.toLowerCase();
      filteredEnquiries = filteredEnquiries.filter(
        (item) =>
          item.name?.toLowerCase().includes(term) ||
          item.email?.toLowerCase().includes(term) ||
          item.phone?.toLowerCase().includes(term) ||
          item.message?.toLowerCase().includes(term)
      );
      filteredQuotes = filteredQuotes.filter(
        (item) =>
          item.firstName?.toLowerCase().includes(term) ||
          item.lastName?.toLowerCase().includes(term) ||
          item.email?.toLowerCase().includes(term) ||
          item.phone?.toLowerCase().includes(term) ||
          item.description?.toLowerCase().includes(term)
      );
    }

    if (submissionFilter !== "all") {
      filteredEnquiries = filteredEnquiries.filter((item) => item.status === submissionFilter);
      filteredQuotes = filteredQuotes.filter((item) => item.status === submissionFilter);
    }

    if (dateFilter !== "all") {
      const now = new Date();
      let startDate;
      switch (dateFilter) {
        case "today":
          startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          break;
        case "yesterday": {
          startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
          const endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          filteredEnquiries = filteredEnquiries.filter((item) => {
            const itemDate = item.timestamp?.toDate ? item.timestamp.toDate() : new Date(item.timestamp);
            return itemDate >= startDate && itemDate < endDate;
          });
          filteredQuotes = filteredQuotes.filter((item) => {
            const itemDate = item.timestamp?.toDate ? item.timestamp.toDate() : new Date(item.timestamp);
            return itemDate >= startDate && itemDate < endDate;
          });
          startDate = null;
          break;
        }
        case "last7days":
          startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          break;
        case "last30days":
          startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          break;
        case "custom":
          if (customDateRange.start && customDateRange.end) {
            const start = new Date(customDateRange.start);
            const end = new Date(customDateRange.end);
            end.setHours(23, 59, 59, 999);
            filteredEnquiries = filteredEnquiries.filter((item) => {
              const itemDate = item.timestamp?.toDate ? item.timestamp.toDate() : new Date(item.timestamp);
              return itemDate >= start && itemDate <= end;
            });
            filteredQuotes = filteredQuotes.filter((item) => {
              const itemDate = item.timestamp?.toDate ? item.timestamp.toDate() : new Date(item.timestamp);
              return itemDate >= start && itemDate <= end;
            });
          }
          startDate = null;
          break;
        default:
          startDate = null;
      }
      if (startDate && dateFilter !== "yesterday" && dateFilter !== "custom") {
        filteredEnquiries = filteredEnquiries.filter((item) => {
          const itemDate = item.timestamp?.toDate ? item.timestamp.toDate() : new Date(item.timestamp);
          return itemDate >= startDate;
        });
        filteredQuotes = filteredQuotes.filter((item) => {
          const itemDate = item.timestamp?.toDate ? item.timestamp.toDate() : new Date(item.timestamp);
          return itemDate >= startDate;
        });
      }
    }

    if (sourceFilter !== "all") {
      filteredEnquiries = filteredEnquiries.filter((item) => item.source === sourceFilter);
      filteredQuotes = filteredQuotes.filter((item) => item.source === sourceFilter);
    }

    if (buildingTypeFilter !== "all") {
      filteredQuotes = filteredQuotes.filter((item) => item.buildingType === buildingTypeFilter);
    }

    if (hasAttachmentsFilter !== "all") {
      const hasFiles = hasAttachmentsFilter === "yes";
      filteredEnquiries = filteredEnquiries.filter((item) => hasAttachments(item) === hasFiles);
      filteredQuotes = filteredQuotes.filter((item) => hasAttachments(item) === hasFiles);
    }

    setEnquirySubmissions(filteredEnquiries);
    setQuoteSubmissions(filteredQuotes);
  }, [
    submissionSearchTerm,
    submissionFilter,
    dateFilter,
    customDateRange,
    sourceFilter,
    buildingTypeFilter,
    hasAttachmentsFilter,
    allEnquiries,
    allQuotes,
  ]);

  useEffect(() => {
    applyAdvancedFilters();
  }, [applyAdvancedFilters]);

  const handleSubmissionSearch = useCallback((term) => setSubmissionSearchTerm(term), []);
  const handleSubmissionFilter = useCallback((filter) => setSubmissionFilter(filter), []);

  const resetAllFilters = useCallback(() => {
    setSubmissionSearchTerm("");
    setSubmissionFilter("all");
    setDateFilter("all");
    setCustomDateRange({ start: "", end: "" });
    setSourceFilter("all");
    setBuildingTypeFilter("all");
    setHasAttachmentsFilter("all");
  }, []);

  const handleSelectSubmission = useCallback((submissionId, type) => {
    const key = `${type}_${submissionId}`;
    setSelectedSubmissions((prev) =>
      prev.includes(key) ? prev.filter((id) => id !== key) : [...prev, key]
    );
  }, []);

  const handleSelectAll = useCallback((type) => {
    const submissions = type === "enquiry" ? enquirySubmissions : quoteSubmissions;
    const allIds = submissions.map((s) => `${type}_${s.id}`);
    const currentTypeSelected = selectedSubmissions.filter((id) => id.startsWith(`${type}_`));
    if (currentTypeSelected.length === submissions.length) {
      setSelectedSubmissions((prev) => prev.filter((id) => !id.startsWith(`${type}_`)));
    } else {
      setSelectedSubmissions((prev) => [...prev.filter((id) => !id.startsWith(`${type}_`)), ...allIds]);
    }
  }, [selectedSubmissions, enquirySubmissions, quoteSubmissions]);

  const markSubmissionAsRead = useCallback(async (id, type) => {
    try {
      const collectionName = type === "enquiry" ? "enquiry_submissions" : "quote_submissions";
      await updateDoc(doc(db, collectionName, id), { status: "read" });
      setAllEnquiries((prev) => prev.map((item) => (item.id === id ? { ...item, status: "read" } : item)));
      setAllQuotes((prev) => prev.map((item) => (item.id === id ? { ...item, status: "read" } : item)));
    } catch (error) {
      console.error("Error marking as read:", error);
    }
  }, []);

  const viewSubmission = useCallback((submission) => {
    setSelectedSubmission(submission);
    setShowSubmissionModal(true);
    if (submission.status === "unread") {
      markSubmissionAsRead(submission.id, submission.type);
    }
  }, [markSubmissionAsRead]);

  const deleteSubmission = useCallback(async (id, type) => {
    if (!window.confirm("Are you sure you want to delete this submission?")) return;
    try {
      const collectionName = type === "enquiry" ? "enquiry_submissions" : "quote_submissions";
      await deleteDoc(doc(db, collectionName, id));
      setEnquirySubmissions((prev) => prev.filter((item) => item.id !== id));
      setAllEnquiries((prev) => prev.filter((item) => item.id !== id));
      setQuoteSubmissions((prev) => prev.filter((item) => item.id !== id));
      setAllQuotes((prev) => prev.filter((item) => item.id !== id));
      setShowSubmissionModal(false);
    } catch (error) {
      alert("Error deleting submission");
    }
  }, []);

  const bulkMarkAsRead = useCallback(async () => {
    setBulkLoading(true);
    try {
      const batch = writeBatch(db);
      selectedSubmissions.forEach((key) => {
        const [type, id] = key.split("_");
        const collectionName = type === "enquiry" ? "enquiry_submissions" : "quote_submissions";
        batch.update(doc(db, collectionName, id), { status: "read" });
      });
      await batch.commit();
      setAllEnquiries((prev) =>
        prev.map((item) => (selectedSubmissions.includes(`enquiry_${item.id}`) ? { ...item, status: "read" } : item))
      );
      setAllQuotes((prev) =>
        prev.map((item) => (selectedSubmissions.includes(`quote_${item.id}`) ? { ...item, status: "read" } : item))
      );
      setSelectedSubmissions([]);
      alert("Successfully marked submissions as read");
    } catch (error) {
      console.error("Error in bulk mark as read:", error);
      alert("Error marking submissions as read");
    }
    setBulkLoading(false);
  }, [selectedSubmissions]);

  const bulkDelete = useCallback(async () => {
    if (!window.confirm(`Are you sure you want to delete ${selectedSubmissions.length} submissions? This action cannot be undone.`)) return;
    setBulkLoading(true);
    try {
      const batch = writeBatch(db);
      selectedSubmissions.forEach((key) => {
        const [type, id] = key.split("_");
        const collectionName = type === "enquiry" ? "enquiry_submissions" : "quote_submissions";
        batch.delete(doc(db, collectionName, id));
      });
      await batch.commit();
      setAllEnquiries((prev) => prev.filter((item) => !selectedSubmissions.includes(`enquiry_${item.id}`)));
      setAllQuotes((prev) => prev.filter((item) => !selectedSubmissions.includes(`quote_${item.id}`)));
      setSelectedSubmissions([]);
      setShowSubmissionModal(false);
      alert("Successfully deleted submissions");
    } catch (error) {
      console.error("Error in bulk delete:", error);
      alert("Error deleting submissions");
    }
    setBulkLoading(false);
  }, [selectedSubmissions]);

  const exportData = useCallback(async () => {
    try {
      let dataToExport = [];
      if (exportOptions.submissionTypes.includes("enquiry")) {
        dataToExport = [...dataToExport, ...allEnquiries.map((item) => ({ ...item, type: "enquiry" }))];
      }
      if (exportOptions.submissionTypes.includes("quote")) {
        dataToExport = [...dataToExport, ...allQuotes.map((item) => ({ ...item, type: "quote" }))];
      }
      if (exportOptions.dateRange !== "all") {
        const now = new Date();
        let startDate;
        switch (exportOptions.dateRange) {
          case "last7days":
            startDate = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
            break;
          case "last30days":
            startDate = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
            break;
          case "last90days":
            startDate = new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000);
            break;
          default:
            startDate = null;
        }
        if (startDate) {
          dataToExport = dataToExport.filter((item) => {
            const itemDate = item.timestamp?.toDate ? item.timestamp.toDate() : new Date(item.timestamp);
            return itemDate >= startDate;
          });
        }
      }
      if (!exportOptions.includeFiles) {
        dataToExport = dataToExport.map((item) => {
          const { attachments, attachment, ...rest } = item;
          return rest;
        });
      }
      const timestamp = new Date().toISOString().split("T")[0];
      const filename = `submissions_backup_${timestamp}`;
      if (exportOptions.format === "json") {
        const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: "application/json" });
        downloadFile(blob, `${filename}.json`);
      } else {
        const csvData = convertToCSV(dataToExport);
        const blob = new Blob([csvData], { type: "text/csv" });
        downloadFile(blob, `${filename}.csv`);
      }
      setShowExportModal(false);
      alert(`Successfully exported ${dataToExport.length} submissions`);
    } catch (error) {
      console.error("Error exporting data:", error);
      alert("Error exporting data");
    }
  }, [exportOptions, allEnquiries, allQuotes]);

  const totalEnquiries = allEnquiries.length;
  const totalQuotes = allQuotes.length;
  const unreadEnquiries = allEnquiries.filter((item) => item.status === "unread").length;
  const unreadQuotes = allQuotes.filter((item) => item.status === "unread").length;
  const totalUnread = unreadEnquiries + unreadQuotes;
  const allSources = [...new Set([...allEnquiries.map((e) => e.source), ...allQuotes.map((q) => q.source)])].filter(Boolean);
  const allBuildingTypes = [...new Set(allQuotes.map((q) => q.buildingType))].filter(Boolean);

  const getStorageCleanupSuggestions = useCallback(() => {
    const suggestions = [];
    const oldDate = new Date();
    oldDate.setMonth(oldDate.getMonth() - 6);
    const oldSubmissions = [...allEnquiries, ...allQuotes].filter((item) => {
      const itemDate = item.timestamp?.toDate ? item.timestamp.toDate() : new Date(item.timestamp);
      return itemDate < oldDate;
    });
    if (oldSubmissions.length > 0) {
      suggestions.push({
        type: "archive_old",
        title: "Archive old submissions",
        description: `${oldSubmissions.length} submissions older than 6 months`,
        risk: "low",
        savings: `~${(oldSubmissions.length * 0.1).toFixed(1)}MB`,
      });
    }
    const readSubmissions = [...allEnquiries, ...allQuotes].filter((item) => item.status === "read");
    if (readSubmissions.length > 100) {
      suggestions.push({
        type: "cleanup_read",
        title: "Clean up read submissions",
        description: `${readSubmissions.length} read submissions can be archived`,
        risk: "medium",
        savings: `~${(readSubmissions.length * 0.1).toFixed(1)}MB`,
      });
    }
    const submissionsWithFiles = [...allEnquiries, ...allQuotes].filter(hasAttachments);
    if (submissionsWithFiles.length > 50) {
      suggestions.push({
        type: "compress_files",
        title: "Compress file attachments",
        description: `${submissionsWithFiles.length} submissions with large files`,
        risk: "high",
        savings: `~${(storageInfo.filesSize * 0.3).toFixed(1)}MB`,
      });
    }
    return suggestions;
  }, [allEnquiries, allQuotes, storageInfo.filesSize]);

  return {
    enquirySubmissions,
    quoteSubmissions,
    allEnquiries,
    allQuotes,
    submissionSearchTerm,
    setSubmissionSearchTerm,
    submissionFilter,
    setSubmissionFilter,
    selectedSubmission,
    setSelectedSubmission,
    showSubmissionModal,
    setShowSubmissionModal,
    showAdvancedFilters,
    setShowAdvancedFilters,
    dateFilter,
    setDateFilter,
    customDateRange,
    setCustomDateRange,
    sourceFilter,
    setSourceFilter,
    buildingTypeFilter,
    setBuildingTypeFilter,
    hasAttachmentsFilter,
    setHasAttachmentsFilter,
    selectedSubmissions,
    setSelectedSubmissions,
    bulkLoading,
    storageInfo,
    showStorageModal,
    setShowStorageModal,
    showExportModal,
    setShowExportModal,
    exportOptions,
    setExportOptions,
    fetchSubmissions,
    handleSubmissionSearch,
    handleSubmissionFilter,
    resetAllFilters,
    handleSelectSubmission,
    handleSelectAll,
    viewSubmission,
    markSubmissionAsRead,
    deleteSubmission,
    bulkMarkAsRead,
    bulkDelete,
    exportData,
    totalEnquiries,
    totalQuotes,
    unreadEnquiries,
    unreadQuotes,
    totalUnread,
    allSources,
    allBuildingTypes,
    getStorageCleanupSuggestions,
  };
}
