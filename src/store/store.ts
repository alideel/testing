import { create } from "zustand";

type UIStore = {
  expandedSidebar: boolean;
  toggleExpandedSidebar: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
  expandedSidebar: true,
  toggleExpandedSidebar: () => {
    set((state) => ({
      expandedSidebar: !state.expandedSidebar,
    }));
  },
}));
