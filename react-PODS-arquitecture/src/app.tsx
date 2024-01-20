import React from "react";
import { AppRouter } from "./router/app.router";
import { UserProfileProvider } from "./core/providers/user-profile/user-profile.provider";

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

interface MembersContextModel {
  members: MemberEntity[];
  clear: () => void;
}

export const MembersContext = React.createContext<MembersContextModel>(null);

const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  // React.useEffect(() => {
  //   fetch("https://api.github.com/orgs/lemoncode/members")
  //     .then((response) => response.json())
  //     .then(setMembers);
  // }, []);

  const clear = () => {
    setMembers([]);
  };

  const loadMembers = (org: string) => {};

  return (
    <MembersContext.Provider value={{ members, clear }}>
      {children}
    </MembersContext.Provider>
  );
};

export const App = () => {
  return (
    <>
      <UserProfileProvider>
        <MembersProvider>
          <AppRouter />
        </MembersProvider>
      </UserProfileProvider>
    </>
  );
};
