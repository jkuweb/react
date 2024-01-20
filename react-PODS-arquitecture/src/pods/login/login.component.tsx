import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { TextField } from "@/common/components/text-field.component";

import {
  LoginFormData,
  createEmptyLoginFormData,
  createEmptyLoginFormErrors,
} from "./login.vm";
import { formValidation } from "./login.validations";

interface Props {
  onLogin: (data: LoginFormData) => void;
}

export const Login: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [formData, setFormData] = React.useState<LoginFormData>(
    createEmptyLoginFormData
  );

  const [errors, setErrors] = React.useState(createEmptyLoginFormErrors);

  const hasErrors = Object.keys(errors).some((x) => errors[x] !== "");

  const handleChange =
    (field: keyof LoginFormData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      formValidation
        .validateField(field, e.target.value)
        .then((validationResult) => {
          setErrors({
            ...errors,
            [field]: validationResult.message,
          });
        });

      setFormData({
        ...formData,
        [field]: e.target.value,
      });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    formValidation.validateForm(formData).then((validationResult) => {
      if (validationResult.succeeded) {
        onLogin(formData);
      }
    });
  };

  return (
    <Card sx={{ padding: "20px" }}>
      <CardHeader title="Login" />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <TextField
              name="username"
              value={formData.username}
              onChange={handleChange("username")}
              helperText={errors.username}
              error={Boolean(errors.username)}
            />

            <TextField
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange("password")}
              helperText={errors.password}
              error={Boolean(errors.password)}
            />

            <Button type="submit" disabled={hasErrors} variant="contained">
              Login!
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
