import React from "react";
import { Member } from "./member-list.vm";
import { MemberList } from "./member-list.component";
import { getMembers } from "./member-list.repository";

interface Props {
  onSelect: (login: string) => void;
}

export const MemberListContainer: React.FC<Props> = (props) => {
  const { onSelect } = props;
  const [members, setMembers] = React.useState<Member[]>([]);

  React.useEffect(() => {
    getMembers("lemoncode").then(setMembers);
  }, []);

  return <MemberList members={members} onSelect={onSelect} />;
};
