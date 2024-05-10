import { create } from "zustand";

type State = {
  isCancel: boolean;
};

type Action = {
  updateAlertState: (isCancel: State["isCancel"]) => void;
};

export const useAlertStore = create<State & Action>()((set) => ({
  isCancel: false,
  updateAlertState: (confirm) => set(() => ({ isCancel: confirm })),
}));
