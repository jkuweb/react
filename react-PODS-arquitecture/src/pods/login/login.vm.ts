export interface LoginFormData {
  username: string;
  password: string;
}

export type LoginFormErrors = Record<keyof LoginFormData, string>;

export const createEmptyLoginFormData = (): LoginFormData => ({
  username: "",
  password: "",
});

export const createEmptyLoginFormErrors = (): LoginFormErrors => ({
  username: "",
  password: "",
});
