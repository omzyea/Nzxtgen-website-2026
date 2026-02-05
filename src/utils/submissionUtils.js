/**
 * Submission-related pure utilities (formatting, links, attachments).
 */

export function formatDate(timestamp) {
  if (!timestamp) return "Unknown";
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  return date.toLocaleString();
}

export function getWhatsAppLink(submission) {
  const phone = submission.phone?.replace(/[^0-9]/g, "") || "61437885910";
  const message =
    submission.type === "enquiry"
      ? `Hi ${submission.name}, thanks for your enquiry about "${(submission.message || "").substring(0, 50)}...". We'll get back to you soon!`
      : `Hi ${submission.firstName}, thanks for your quote request for "${(submission.description || "").substring(0, 50)}...". We'll prepare your quote shortly!`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function getEmailLink(submission) {
  const subject =
    submission.type === "enquiry"
      ? `Re: Your Enquiry - ${submission.name}`
      : `Re: Your Quote Request - ${submission.firstName} ${submission.lastName}`;
  return `mailto:${submission.email}?subject=${encodeURIComponent(subject)}`;
}

export function hasAttachments(submission) {
  if (submission.attachments && submission.attachments.length > 0) return true;
  const att = submission.attachment;
  return att && typeof att === "object" && (att.fileName || att.fileData);
}

export function getAttachmentCount(submission) {
  if (submission.attachments && submission.attachments.length > 0) {
    return submission.attachments.length;
  }
  const att = submission.attachment;
  if (att && typeof att === "object" && (att.fileName || att.fileData)) return 1;
  return 0;
}

export function downloadAttachment(attachment) {
  if (!attachment || !attachment.fileData) return;
  try {
    const base64Data = attachment.fileData.split(",")[1];
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: attachment.fileType });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = attachment.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading file:", error);
    alert("Error downloading file");
  }
}

export function downloadFile(blob, filename) {
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}

export function convertToCSV(data) {
  if (data.length === 0) return "";
  const headers = Object.keys(data[0]).filter((key) => key !== "attachments" && key !== "attachment");
  const csvRows = [
    headers.join(","),
    ...data.map((row) =>
      headers
        .map((header) => {
          const value = row[header];
          if (value && typeof value === "object" && value.toDate) return `"${value.toDate().toISOString()}"`;
          if (typeof value === "string" && value.includes(",")) return `"${value.replace(/"/g, '""')}"`;
          return value || "";
        })
        .join(",")
    ),
  ];
  return csvRows.join("\n");
}
