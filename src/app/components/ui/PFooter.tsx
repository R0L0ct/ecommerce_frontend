import React from "react";

interface Props {
  children: string;
}

export const PFooter = ({ children }: Props) => {
  return (
    <p className="font-bold text-lg hover:text-blue-900 hover:cursor-pointer">
      {children}
    </p>
  );
};
