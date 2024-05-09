"use client";
import { refreshToken } from "@/api/data.api";
import { getCookie } from "@/app/actions";
import { useUserStore } from "@/store/user-store";
import React, { useEffect, useState } from "react";

export const Layout = ({ children }: any) => {
  const userStore = useUserStore((state) => state.updateUsername);

  useEffect(() => {
    const getRefresh = async () => {
      try {
        refreshToken();
        const data = await getCookie();
        userStore(data.username);
      } catch (err) {
        console.log("Something goes wrong");
      }
    };
    getRefresh();
  }, []);
  return <>{children}</>;
};
