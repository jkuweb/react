import React from "react";
import { AppLayout } from "@/layouts";
import { MemberDetailContainer } from "@/pods/member-detail";
import { useParams } from "react-router-dom";

export const MemberDetailScene: React.FC = () => {
  const { login } = useParams<{ login: string }>();

  return (
    <AppLayout>
      <MemberDetailContainer login={login} />
    </AppLayout>
  );
};
