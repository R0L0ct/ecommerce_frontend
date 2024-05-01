import { create } from "zustand";

interface CategoryState {
  hover: boolean;

  toggle: () => void;
}

export const useCategoryStore = create<CategoryState>()((set) => ({
  hover: false,
  toggle: () => set((state) => ({ hover: !state.hover })),
}));
