import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { MemberListScene, MemberDetailScene } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={switchRoutes.root} element={<MemberListScene />} />
        <Route path={switchRoutes.detail} element={<MemberDetailScene />} />
        <Route path="*" element={<div>404 not found!</div>} />
      </Routes>
    </HashRouter>
  );
};
