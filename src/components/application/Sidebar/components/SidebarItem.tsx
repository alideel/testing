import React from "react";
import { useUIStore } from "@/store/store";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string | undefined;
  active?: boolean;
}

export default function SidebarItem({
  icon,
  text,
  active = false,
}: SidebarItemProps) {
  const expandedSidebar = useUIStore((state) => state.expandedSidebar);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      <span
        className={`overflow-hidden transition-all ${
          expandedSidebar ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {!expandedSidebar && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
