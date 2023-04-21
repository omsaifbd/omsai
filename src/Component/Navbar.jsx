import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import {
  FaBars,
  FaBriefcase,
  FaHome,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";
import { RiGalleryFill } from "react-icons/ri";
import { SiCoursera } from "react-icons/si";
import { MdContactPage } from "react-icons/md";
export default function Navbar() {
  const links = [
    { path: "/omsai", title: "Home", icon: <FaHome /> },
    { path: "/students", title: "Students", icon: <FaUserTie /> },
    { path: "/certify", title: "Certify", icon: <FaUserGraduate /> },
    { path: "/courses", title: "Courses", icon: <SiCoursera /> },
    { path: "/gallary", title: "Gallary", icon: <RiGalleryFill/> },
    { path: "/about", title: "About", icon: <FaBriefcase /> },
    { path: "/contact", title: "Contact", icon: <MdContactPage /> },
  ];

  const [isShow, isSetShow] = useState(false);
  const toggle = () => isSetShow(!isShow);

  return (
    
    <div className="sidebar" style={{ width: isShow ? "220px" : "50px" }}>
      <div className="top_section">
        <h1 style={{ display: isShow ? "flex" : "none" }}>OMSAI</h1>
        <div className="bars">
          <FaBars onClick={toggle}  />
        </div>
      </div>
      {links.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link"
          activeclassName="active"
        >
          <div className="icon">{item.icon}</div>
          <div
            className="link_text"
            style={{ display: isShow ? "flex" : "none" }}
          >
            {item.title}
          </div>
        </NavLink>
      ))}
    </div>
  );
}
