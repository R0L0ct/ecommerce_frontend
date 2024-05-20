import { create } from "zustand";

interface State {
  clicked: boolean;

  toggle: () => void;
}

export const useBarMenuStore = create<State>()((set) => ({
  clicked: false,
  toggle: () => set((state) => ({ clicked: !state.clicked })),
}));
