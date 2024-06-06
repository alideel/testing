import React from "react";

import { useUIStore } from "@/store/store";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import SidebarItem from "./components/SidebarItem";
import SidebarCollapseItem from "./components/SidebarCollapseItem";
import { SidebarRoute } from "@/sidebarRouts";

export default function Sidebar({ routes }: { routes: SidebarRoute[] }) {
  const expandedSidebar = useUIStore((state) => state.expandedSidebar);
  const toggleExpandedSidebar = useUIStore(
    (state) => state.toggleExpandedSidebar
  );
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expandedSidebar ? "w-32" : "w-0"
            }`}
          />
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            onClick={toggleExpandedSidebar}
          >
            {expandedSidebar ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>
        <ul className="flex-1 px-3">
          {routes.map((route) => {
            if (route.type == "link")
              return <SidebarItem icon={route.icon} text={route.text} />;
            if (route.type == "divider") return <hr className="my-3" />;
            if (route.type == "collapse")
              return (
                <SidebarCollapseItem icon={route.icon} text={route.text} />
              );
          })}
        </ul>
        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${
                expandedSidebar ? "w-52 ml-3" : "w-0"
              }
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
