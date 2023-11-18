import React from "react";
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
import { Link } from "react-router-dom";

const SideNav = ({
  navActive,setnavActive
}) => {
  
  const navItems = [
    {
      id: 1,
      icon: <DashboardIcon />,
      name: "Dashboard",
      path: '/'
    },
    {
      id: 2,
      icon: <MessageRoundedIcon />,
      name: "Message",
      path: '/message'
    },
    {
      id: 3,
      icon: <CalendarMonthRoundedIcon />,
      name: "Calender",
      path: '/calender'
    },
    {
      id: 4,
      icon: <WorkRoundedIcon />,
      name: "Jobs",
      path: '/jobs'
    },
    {
      id: 5,
      icon: <PeopleAltRoundedIcon />,
      name: "Candidates",
      path: '/candidates'
    },
    {
      id: 6,
      icon: <SettingsEthernetRoundedIcon />,
      name: "Refer",
      path: '/refer'
    },
    {
      id: 7,
      icon: <WebAssetRoundedIcon />,
      name: "Career Site",
      path: '/careers'
    },
    {
      id: 8,
      icon: <PeopleAltRoundedIcon />,
      name: "Employee",
      path: '/employee'
    },
    {
      id: 9,
      icon: <SettingsEthernetRoundedIcon />,
      name: "Structure",
      path: '/structure'
    },
    {
      id: 10,
      icon: <AssignmentRoundedIcon />,
      name: "Report",
      path: '/report'
    },
    {
      id: 11,
      icon: <TuneRoundedIcon />,
      name: "Settings",
      path: '/settings'
    },
  ];

  const navStyle = {
    active: "navitem col-12 bg-primary text-white",
    inActive: "navitem col-12 bg-white text-muted hoveritem",
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
            <Link
              to={navItems.path}
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
            </Link>
          ))}
        </div>
        <div className="my-2">
          <h3 className="navlisthead">Recruitment</h3>
          {navItems.slice(3, 7).map((navItems) => (
            <Link
              to={navItems.path}
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
            </Link>
          ))}
        </div>
        <div className="my-2">
          <h3 className="navlisthead">Organization</h3>
          {navItems.slice(7, 11).map((navItems) => (
            <Link
              to={navItems.path}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
