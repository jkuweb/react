import { Validators, createFormValidation } from "@lemoncode/fonk";

const validationSchema = {
  field: {
    username: [
      Validators.required,
      {
        validator: Validators.email,
        message: "Introduce un email válido.",
      },
    ],
    password: [
      Validators.required,
      {
        validator: Validators.minLength,
        customArgs: { length: 4 },
        message: "El password debe tener al menos 8 caracteres.",
      },
    ],
  },
};
export const formValidation = createFormValidation(validationSchema);
