import React from "react";
import { UserProfileContext } from "./user-profile.context";
import { LoginScene } from "@/scenes";

export const UserProfileProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [username, setUsername] = React.useState<string>("");

  return (
    <UserProfileContext.Provider value={{ username, setUsername }}>
      {username === null ? (
        <>Loading</>
      ) : username ? (
        <>{children}</>
      ) : (
        <LoginScene />
      )}
    </UserProfileContext.Provider>
  );
};
