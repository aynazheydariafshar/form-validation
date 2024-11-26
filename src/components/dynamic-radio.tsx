import React from "react";
import { DynamicRadioProps } from "../types/dynamic-radio-props";
import { useForm } from "react-hook-form";

export function DynamicRadio({ title, radioItems, name }: DynamicRadioProps) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex items-center gap-2 text-white">
      <h4>{title} : </h4>
      <div className="flex flex-wrap gap-2 items-center">
        {radioItems.map(({ label, value }) => (
          <div>
            <input
              className="m-1"
              type="radio"
              id={value}
              value={value}
              {...register(name)}
            />
            <label htmlFor={value}>{label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
