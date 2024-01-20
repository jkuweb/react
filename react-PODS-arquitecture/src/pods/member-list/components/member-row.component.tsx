import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { Member } from "../member-list.vm";

interface Props {
  member: Member;
  onClick: () => void;
}

export const MemberRow: React.FC<Props> = (props) => {
  const { member, onClick } = props;

  return (
    <>
      <img src={member.avatarUrl} alt="" />
      <div>{member.id}</div>
      <div>
        <div onClick={onClick}>{member.login}</div>
      </div>
    </>
  );
};
