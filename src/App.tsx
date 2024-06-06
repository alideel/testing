import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaRegChartBar, FaRegUserCircle } from "react-icons/fa";
import { LuBoxes, LuPackage } from "react-icons/lu";
import { TbReceiptDollar } from "react-icons/tb";
import { MdOutlineSettings } from "react-icons/md";
import { IoIosHelpCircle } from "react-icons/io";
import "./App.css";
import { Button } from "./components/ui/button";
import Sidebar from "./components/application/Sidebar";

import { Routes, Route } from "react-router-dom";

import { routes, SidebarRoute } from "./sidebarRouts";
import Users from "./pages/users";

function App() {
  const getRoutesOfSidebar = (allRoutes: SidebarRoute[]): React.ReactNode => {
    return allRoutes.map((singleRoute) => {
      if (singleRoute.route && singleRoute.component) {
        return (
          <React.Fragment key={singleRoute.route}>
            <Route
              path="/users"
              element={singleRoute.component}
              key={singleRoute.route}
            />
          </React.Fragment>
        );
      }
    });
  };
  return (
    <>
      <div className="flex h-full">
        <Sidebar routes={routes} />

        <div className="grow mt-2 mx-3 overflow-auto">
          <Routes>
            {getRoutesOfSidebar(routes)}

            {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
