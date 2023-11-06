import React, { useState } from "react";
import navImage from "../assets/logo.png";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import SettingsEthernetRoundedIcon from "@mui/icons-material/SettingsEthernetRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import WebAssetRoundedIcon from "@mui/icons-material/WebAssetRounded";

const SideNav = () => {
  const [navActive, setnavActive] = useState(1);
  const navItems = [
    {
      id: 1,
      icon: <DashboardIcon />,
      name: "Dashboard",
    },
    {
      id: 2,
      icon: <MessageRoundedIcon />,
      name: "Message",
    },
    {
      id: 3,
      icon: <CalendarMonthRoundedIcon />,
      name: "Calender",
    },
    {
      id: 4,
      icon: <WorkRoundedIcon />,
      name: "Jobs",
    },
    {
      id: 5,
      icon: <PeopleAltRoundedIcon />,
      name: "Candidates",
    },
    {
      id: 6,
      icon: <SettingsEthernetRoundedIcon />,
      name: "Refer",
    },
    {
      id: 7,
      icon: <WebAssetRoundedIcon />,
      name: "Career Site",
    },
    {
      id: 8,
      icon: <PeopleAltRoundedIcon />,
      name: "Employee",
    },
    {
      id: 9,
      icon: <SettingsEthernetRoundedIcon />,
      name: "Structure",
    },
    {
      id: 10,
      icon: <AssignmentRoundedIcon />,
      name: "Report",
    },
    {
      id: 11,
      icon: <TuneRoundedIcon />,
      name: "Settings",
    },
  ];

  const navStyle = {
    active: "navitem col-12 bg-primary text-white",
    inActive: "navitem col-12 bg-white text-muted",
  };

  return (
    <div className="col-12 sideNav">
      <div className="navBrand col-12">
        <div className="navimg col-2">
          <img src={navImage} alt="logo" width={50} />
        </div>
        <div className="col-8">
          <h2 className="navName">SM Services</h2>
        </div>
      </div>
      <div className="navlist">
        <div className="my-2">
          <h3 className="navlisthead">Menu</h3>
          {navItems.slice(0, 3).map((navItems) => (
            <div
              key={navItems.id}
              className={
                navItems.id === navActive ? navStyle.active : navStyle.inActive
              }
              onClick={() => setnavActive(navItems.id)}
            >
              {React.cloneElement(navItems.icon, {
                style: { fontSize: "1.2rem" },
              })}
              <p>{navItems.name}</p>
            </div>
          ))}
        </div>
        <div className="my-2">
          <h3 className="navlisthead">Recruitment</h3>
          {navItems.slice(3, 7).map((navItems) => (
            <div
              key={navItems.id}
              className={
                navItems.id === navActive ? navStyle.active : navStyle.inActive
              }
              onClick={() => setnavActive(navItems.id)}
            >
              {React.cloneElement(navItems.icon, {
                style: { fontSize: "1.2rem" },
              })}
              <p>{navItems.name}</p>
            </div>
          ))}
        </div>
        <div className="my-2">
          <h3 className="navlisthead">Organization</h3>
          {navItems.slice(7, 11).map((navItems) => (
            <div
              key={navItems.id}
              className={
                navItems.id === navActive ? navStyle.active : navStyle.inActive
              }
              onClick={() => setnavActive(navItems.id)}
            >
              {React.cloneElement(navItems.icon, {
                style: { fontSize: "1.2rem" },
              })}
              <p>{navItems.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
