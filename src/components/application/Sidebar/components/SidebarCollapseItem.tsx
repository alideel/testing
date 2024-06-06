import React from "react";
import { useUIStore } from "@/store/store";

interface SidebarItemProps {
  icon: React.ReactNode;
  text?: string;
  active?: boolean;
}

import SidebarItem from "./SidebarItem";

import { IoHelpCircle } from "react-icons/io5";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SidebarCollapseItem({
  icon,
  text,
  active = false,
}: SidebarItemProps) {
  const expandedSidebar = useUIStore((state) => state.expandedSidebar);
  return (
    <li>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={`w-full relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
              active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
            }`}
          >
            <div className="flex items-center">
              {React.cloneElement(icon as React.ReactElement, { size: 20 })}
              <span
                className={`overflow-hidden transition-all ${
                  expandedSidebar ? "ml-3" : "w-0"
                }`}
              >
                {text}
              </span>
            </div>
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
          </AccordionTrigger>
          <AccordionContent>
            <SidebarItem icon={<IoHelpCircle />} text="sub22" />
            <SidebarItem icon={<IoHelpCircle />} text="sub2adasd2" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </li>
  );
}
