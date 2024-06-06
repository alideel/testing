/** 
  explain the routes:

  For adding a new route you can follow the existing routes in the routes array.

  descripe the route object : 

  1-type = link --> this mean be as link, real nav link in sidebar
  2-type = divider --> divide the nav items for sidebar
  
*/

import React, { ReactNode } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegChartBar, FaRegUserCircle } from "react-icons/fa";
import { LuBoxes, LuPackage } from "react-icons/lu";
import { TbReceiptDollar } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";

import Users from "@/pages/users";

export interface SidebarRoute {
  type: string;
  icon?: React.ReactNode;
  text?: string;
  route?: string;
  component?: ReactNode;
  //   active?: boolean;
  //   alert?: boolean;
}

export const routes: SidebarRoute[] = [
  {
    type: "link",
    icon: <LuLayoutDashboard />,
    text: "Dashboard",
    route: "/dashboard",
  },
  {
    type: "collapse",
    icon: <LuLayoutDashboard />,
    text: "Dashboard",
    route: "/dashboard",
  },
  {
    type: "link",
    icon: <FaRegChartBar />,
    text: "Statistics",
    route: "/statistics",
  },
  {
    type: "link",
    icon: <FaRegUserCircle />,
    text: "Users",
    route: "/users",
    component: <Users />,
  },
  {
    type: "link",
    icon: <LuBoxes />,
    text: "Inventory",
    route: "/inventory",
  },
  {
    type: "link",
    icon: <LuPackage />,
    text: "orders",
    route: "/orders",
  },
  {
    type: "link",
    icon: <TbReceiptDollar />,
    text: "Bilings",
    route: "/bilings",
  },
  {
    type: "divider",
  },
  {
    type: "link",
    icon: <MdOutlineSettings />,
    text: "Settings",
    route: "/settings",
  },
  {
    type: "link",
    icon: <IoIosHelpCircle />,
    text: "Help",
    route: "/help",
  },
];
