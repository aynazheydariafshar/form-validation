import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface InputProps {
  name: string;
  type: string;
  label: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}
