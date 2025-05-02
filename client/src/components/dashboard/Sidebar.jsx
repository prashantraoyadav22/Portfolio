import React from "react";

const sections = [
  "Overview",
  "Projects",
  "Certificates",
  "Blogs",
  "Experience",
  "Education",
  "Tech Stack",
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r px-4 py-6 hidden md:block">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section}>
            <button className="w-full text-left px-2 py-1 rounded hover:bg-gray-200">
              {section}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
