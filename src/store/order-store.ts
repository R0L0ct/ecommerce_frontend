import { create } from "zustand";

type State = {
  isConfirm: boolean;
};

type Action = {
  updateOrderState: (isConfirm: State["isConfirm"]) => void;
};

export const useOrderStore = create<State & Action>()((set) => ({
  isConfirm: false,
  updateOrderState: (confirm) => set(() => ({ isConfirm: confirm })),
}));
