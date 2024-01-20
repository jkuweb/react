import React from "react";
import "./centered.layout.css";

export const CenteredLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="layout-center">{children}</div>;
};
