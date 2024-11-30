import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface RadioItem {
  label: string;
  value: string;
}
export interface RadioProps {
  title: string;
  radioItems: RadioItem[];
  name: string;
  errors: FieldErrors;
  register: UseFormRegister<any>;
}
