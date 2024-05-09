import { cookies } from "next/headers";
export const getCookies = async () => {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  return accessToken;
};
