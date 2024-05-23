import { create } from "zustand";

type State = {
  username: string;
  id: number | string;
};

type Action = {
  updateUsername: (username: State["username"]) => void;
  updateUserId: (id: State["id"]) => void;
};

export const useUserStore = create<State & Action>()((set) => ({
  username: "",
  id: "",
  updateUsername: (username) => set(() => ({ username: username })),
  updateUserId: (id) => set(() => ({ id: id })),
}));
