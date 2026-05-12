import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/about-me", label: "About Me" },
    { path: "/my-idea-project", label: "My Idea Project" },
    { path: "/methodology", label: "Methodology" },
    { path: "/data-analysis-delivery", label: "Data Analysis & Delivery" },
    { path: "/conclusion", label: "Conclusion" },
    { path: "/recommendations", label: "Recommendations"},
    { path: "/extras", label: "Extras" },
  ];

  return (
    <nav className="fisheye-nav" onMouseLeave={() => setHoveredIndex(-1)}>
      {links.map((link, index) => (
        <NavLink
          key={link.path}
          to={link.path}
          onMouseEnter={() => setHoveredIndex(index)}
          className={({ isActive }) => {
            // Determine distance from the "center of attention"
            // Priority 1: The hovered item. Priority 2: The active page.
            const focusIndex = hoveredIndex !== -1 ? hoveredIndex : links.findIndex(l => l.path === window.location.pathname);
            const distance = Math.abs(index - focusIndex);

            let sizeClass = "nav-header-distant";
            if (distance === 0) sizeClass = "nav-header-active";
            else if (distance === 1) sizeClass = "nav-header-adjacent";

            return `nav-item ${sizeClass} ${isActive ? "active-link" : ""}`;
          }}
        >
           {link.label} 
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar