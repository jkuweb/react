import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  detail: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  detail: "/detail/:login",
};

interface Routes extends Omit<SwitchRoutes, "detail"> {
  detail: (login: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (login: string) => generatePath(switchRoutes.detail, { login }),
};
