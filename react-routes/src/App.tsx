import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DetailPage } from "./detail-page";
import { ListPage } from "./list-page";
import { LoginPage } from "./login-page";
import { Error404 } from "./error-404";

const PublicRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<ListPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

const PrivateRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/list" element={<ListPage />} />
      <Route path="/detail" element={<DetailPage />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

const AppRouter = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/private/*" element={<PrivateRouter />} />
      <Route path="/*" element={<PublicRouter />} />
    </Routes>
  </BrowserRouter>;
};

export const App = () => {
  return <AppRouter />;
};
