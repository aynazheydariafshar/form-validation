import React from "react";
import { CardTitleFormProps } from "../types/card-title-form-props";

export function CardTitleForm({ title, children }: CardTitleFormProps) {
  return (
    <div className="mb-4">
      <div className="border rounded-md p-2 flex flex-col gap-2">
        <h1 className="text-white text-3xl font-bold m-2">{title}</h1>
        {children}
      </div>
    </div>
  );
}
