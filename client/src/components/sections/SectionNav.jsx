import { useEffect, useState } from "react";

const sections = ["Overview","TechStack", "Experience", "Project", "Other" ];

const SectionNav = () => {
  const [current, setCurrent] = useState("Overview");
  const [visible, setVisible] = useState(false);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      // Get the section offsets
      const offsets = sections.map((id) => {
        const el = document.getElementById(id.toLowerCase());
        return {
          id,
          offset: el?.getBoundingClientRect().top || 0,
        };
      });

      // Set the current active section based on scroll position
      const active = offsets.find((s) => s.offset >= 0 && s.offset <= 200);
      if (active) setCurrent(active.id);

      // Check if we've scrolled past the overview section to show the nav
      const overview = document.getElementById("overview");
      if (overview && overview.getBoundingClientRect().bottom < 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle smooth scrolling to sections
  const handleClick = (sectionId) => {
    const el = document.getElementById(sectionId);
    window.scrollTo({
      top: el.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed top-1/4 left-2 z-10 transition-all duration-500 ${
        visible ? "opacity-70 translate-x-0" : "opacity-0 -translate-x-20"
      } md:block hidden`} // Ensures it's hidden on mobile and visible on medium screens
    >
      <ul className=" rounded-xl p-2 text-sm space-y-1">
        {sections.map((sec) => (
          <li key={sec}>
            <a
              href={`#${sec.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor click behavior
                handleClick(sec.toLowerCase()); // Scroll to the section
              }}
              className={`block px-3 py-1 text-gray-400 rounded-md transition-all duration-300 ${
                current === sec
                  ? "font-bold text-purple-400 transform scale-105 translate-x-5" // Active state, larger font
                  : "text-white hover:text-purple-300 hover:scale-120" // Hover effect and color change
              }`}
            >
              {sec}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionNav;
