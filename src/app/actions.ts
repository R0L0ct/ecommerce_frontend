"use server";
import { validateSession } from "@/api/data.api";
import { cookies } from "next/headers";

export async function getCookie() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accessToken");
  const response = await validateSession({ accessToken: accessToken?.value });
  return response;
}
