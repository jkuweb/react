import { createContext } from "react";
import { UserProfileContextModel } from "./user-profile.vm";

export const UserProfileContext = createContext<UserProfileContextModel>(null);
