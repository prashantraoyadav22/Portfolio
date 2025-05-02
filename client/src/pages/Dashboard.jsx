import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardContent from "../components/dashboard/DashboardContent";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
