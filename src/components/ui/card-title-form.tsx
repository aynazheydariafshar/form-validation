import React from "react";
import { CardTitleFormProps } from "../../types/card-title-form-props";

export function CardTitleForm({ title, children }: CardTitleFormProps) {
  return (
    <div className="my-2">
      <div className="border rounded-lg p-5 flex flex-col bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
}
