import React, { useState } from "react";
import "./Sidebar.css";
import { GrAddCircle } from "react-icons/gr";
const Sidebar = (props) => {
  const colors = ["#3D909D", "#D48674", " #832519", "#56b89D", "#F3A361"];
  const [listActive, setListActive] = useState(false);

  return (
    <div className="sidebar">
      <GrAddCircle
        className="icon"
        onClick={() => setListActive(!listActive)}
      />
      <ul className={`sidebar_list ${listActive ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
