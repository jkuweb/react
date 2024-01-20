import React from "react";
import "./app.layout.css";
import { UserProfileContext } from "@/core/providers/user-profile/user-profile.context";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { username } = React.useContext(UserProfileContext);

  return (
    <>
      <div className="layout-app-container">
        <div className="layout-app-header">User: {username}</div>
        {children}
      </div>
    </>
  );
};
