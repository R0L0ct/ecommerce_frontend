import { useUserStore } from "@/store/user-store";

export function SaveUsername(user: string) {
  const userStore = useUserStore((state) => state.updateUsername);
  userStore(user);
}
