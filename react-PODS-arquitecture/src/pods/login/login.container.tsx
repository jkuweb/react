import React from "react";
import { UserProfileContext } from "@/core/providers/user-profile/user-profile.context";
import { LoginFormData } from "./login.vm";
import { Login } from "./login.component";

export const LoginContainer: React.FC = () => {
  const { setUsername } = React.useContext(UserProfileContext);

  const handleLogin = (data: LoginFormData) => {
    if (data.username === "admin@app.es" && data.password === "test") {
      setUsername(data.username);
    } else {
      alert("Invalid credentials");
    }
  };

  return <Login onLogin={handleLogin} />;
};
