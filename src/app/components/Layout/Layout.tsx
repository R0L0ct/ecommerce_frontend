"use client";
import { refreshToken, validateSession } from "@/api/data.api";
import { useUserStore } from "@/store/user-store";
import React, { useEffect } from "react";

export const Layout = ({ children }: any) => {
  const { updateUsername, updateUserId } = useUserStore();

  useEffect(() => {
    const getRefresh = async () => {
      try {
        const tokendata = await refreshToken();

        const response = await validateSession({
          accessToken: tokendata?.data.token,
        });
        updateUsername(response.username);
        updateUserId(response.id);
      } catch (err) {
        console.log("Something goes wrong");
      }
    };
    getRefresh();
  }, []);
  return <>{children}</>;
};
