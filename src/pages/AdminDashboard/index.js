import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Navbar from "../../components/Navbar";
import SEO from "../../components/SEO";
import { useAdminProducts } from "../../hooks/useAdminProducts";
import { useAdminSubmissions } from "../../hooks/useAdminSubmissions";
import { DashboardHeader } from "../../components/AdminDashboard/DashboardHeader";
import { TabNavigation } from "../../components/AdminDashboard/TabNavigation";
import { ProductsTab } from "../../components/AdminDashboard/ProductsTab";
import { SubmissionsTab } from "../../components/AdminDashboard/SubmissionsTab";
import { StorageModal } from "../../components/AdminDashboard/StorageModal";
import { ExportModal } from "../../components/AdminDashboard/ExportModal";
import { SubmissionDetailModal } from "../../components/AdminDashboard/SubmissionDetailModal";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("products");

  const products = useAdminProducts();
  const submissions = useAdminSubmissions();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) navigate("/admin");
    });
    products.fetchProducts();
    submissions.fetchSubmissions();
    return () => unsubscribe();
  }, [navigate]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLogout = () => {
    auth.signOut().then(() => navigate("/admin"));
  };

  return (
    <div className="wrapper">
      <SEO title="Admin Dashboard | NZXTGEN" description="Admin dashboard" noindex={true} />
      <Navbar />
      <div className="dashboard-container">
        <DashboardHeader
          storageInfo={submissions.storageInfo}
          onStorageClick={() => submissions.setShowStorageModal(true)}
        />

        <TabNavigation
          activeTab={activeTab}
          onTabChange={setActiveTab}
          productsCount={products.allProducts.length}
          submissionsCount={submissions.totalEnquiries + submissions.totalQuotes}
          totalUnread={submissions.totalUnread}
        />

        {activeTab === "products" && (
          <ProductsTab
            products={products.products}
            setProducts={products.setProducts}
            allProducts={products.allProducts}
            searchTerm={products.searchTerm}
            setSearchTerm={products.setSearchTerm}
            showModal={products.showModal}
            openAddProductModal={products.openAddProductModal}
            closeAddProductModal={products.closeAddProductModal}
            handleLogout={handleLogout}
            newItem={products.newItem}
            handleFormChange={products.handleFormChange}
            handleArrayChange={products.handleArrayChange}
            handleAddField={products.handleAddField}
            handleRemoveField={products.handleRemoveField}
            openCloudinaryWidget={products.openCloudinaryWidget}
            handleFormSubmit={products.handleFormSubmit}
            loading={products.loading}
            imgReady={products.imgReady}
            isEditing={products.isEditing}
            modalItem={products.modalItem}
            isModalOpen={products.isModalOpen}
            openProductModal={products.openProductModal}
            closeProductModal={products.closeProductModal}
            handleEdit={products.handleEdit}
            handleDelete={products.handleDelete}
          />
        )}

        {activeTab === "submissions" && (
          <SubmissionsTab
            submissionSearchTerm={submissions.submissionSearchTerm}
            handleSubmissionSearch={submissions.handleSubmissionSearch}
            submissionFilter={submissions.submissionFilter}
            handleSubmissionFilter={submissions.handleSubmissionFilter}
            setShowAdvancedFilters={submissions.setShowAdvancedFilters}
            showAdvancedFilters={submissions.showAdvancedFilters}
            setShowExportModal={submissions.setShowExportModal}
            handleLogout={handleLogout}
            dateFilter={submissions.dateFilter}
            setDateFilter={submissions.setDateFilter}
            customDateRange={submissions.customDateRange}
            setCustomDateRange={submissions.setCustomDateRange}
            sourceFilter={submissions.sourceFilter}
            setSourceFilter={submissions.setSourceFilter}
            buildingTypeFilter={submissions.buildingTypeFilter}
            setBuildingTypeFilter={submissions.setBuildingTypeFilter}
            hasAttachmentsFilter={submissions.hasAttachmentsFilter}
            setHasAttachmentsFilter={submissions.setHasAttachmentsFilter}
            allSources={submissions.allSources}
            allBuildingTypes={submissions.allBuildingTypes}
            resetAllFilters={submissions.resetAllFilters}
            selectedSubmissions={submissions.selectedSubmissions}
            setSelectedSubmissions={submissions.setSelectedSubmissions}
            bulkMarkAsRead={submissions.bulkMarkAsRead}
            bulkDelete={submissions.bulkDelete}
            bulkLoading={submissions.bulkLoading}
            totalEnquiries={submissions.totalEnquiries}
            totalQuotes={submissions.totalQuotes}
            unreadEnquiries={submissions.unreadEnquiries}
            unreadQuotes={submissions.unreadQuotes}
            enquirySubmissions={submissions.enquirySubmissions}
            quoteSubmissions={submissions.quoteSubmissions}
            handleSelectAll={submissions.handleSelectAll}
            handleSelectSubmission={submissions.handleSelectSubmission}
            viewSubmission={submissions.viewSubmission}
            totalUnread={submissions.totalUnread}
          />
        )}
      </div>

      <StorageModal
        open={submissions.showStorageModal}
        onClose={() => submissions.setShowStorageModal(false)}
        storageInfo={submissions.storageInfo}
        getStorageCleanupSuggestions={submissions.getStorageCleanupSuggestions}
      />

      <ExportModal
        open={submissions.showExportModal}
        onClose={() => submissions.setShowExportModal(false)}
        exportOptions={submissions.exportOptions}
        setExportOptions={submissions.setExportOptions}
        onExport={submissions.exportData}
      />

      <SubmissionDetailModal
        open={submissions.showSubmissionModal}
        submission={submissions.selectedSubmission}
        onClose={() => submissions.setShowSubmissionModal(false)}
        onDelete={submissions.deleteSubmission}
      />
    </div>
  );
}

export default AdminDashboard;
