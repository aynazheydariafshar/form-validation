import React from "react";
import { InputProps } from "../../types/input-props";
import { useForm } from "react-hook-form";

export function Input({ name, type, label }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="p-2">
      <label className="text-white">{label}</label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        {...register(name)}
      />
      {errors[name] && (
        <span>{(errors[name] as { message?: string }).message}</span>
      )}{" "}
    </div>
  );
}
