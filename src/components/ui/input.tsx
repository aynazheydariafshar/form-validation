import React from "react";
import { InputProps } from "../../types/input-props";
import { useForm } from "react-hook-form";

export function Input({ name, type, label, register, errors }: InputProps) {
  return (
    <div className="p-1 min-h-24">
      <label className="text-white">{label}</label>
      <input
        className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none  disabled:cursor-not-allowed disabled:opacity-50"
        type={type}
        {...register(name)}
      />
      {errors[name] && (
        <span className="text-red-600 font-bold text-sm">
          {(errors[name] as { message?: string }).message}
        </span>
      )}{" "}
    </div>
  );
}
