import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sideb = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "contact", url: "/contact" },
  ];

  return (
    <aside
      style={{
        width: "200px",
        background: "#f1f1f0",
        minHeight: "90vh",
        padding: "16px",
      }}
    >
      <nav>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {sideb.map((sItem) => (
            <li key={sItem.id}>
               <Link to ={sItem.url}>{sItem.name}</Link> 
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
