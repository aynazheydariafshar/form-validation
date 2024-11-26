import React from "react";
import { DynamicRadioProps } from "../types/dynamic-radio-props";

export default function DynamicRadio({ title, radioItems }: DynamicRadioProps) {
  return (
    <div>
      <p>{title}</p>
      {radioItems.map(({ label, value, name }) => (
        <div>
          <input type="radio" id={value} name={name} value={value} />
          <label htmlFor={value}>{label}</label>
        </div>
      ))}
    </div>
  );
}
