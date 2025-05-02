import React from "react";

const DashboardContent = () => {
  return (
    <main className="flex-1 p-6">
      <h1 className="text-2xl font-semibold mb-4">Edit Section</h1>
      <div className="bg-white rounded shadow p-4">
        {/* Dynamic content goes here */}
        <p>Select a section from the sidebar to start editing.</p>
      </div>
    </main>
  );
};

export default DashboardContent;
