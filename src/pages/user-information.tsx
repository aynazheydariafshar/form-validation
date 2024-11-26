import React from "react";
import { DynamicInput } from "../components/dynamic-input";

export default function UserInformation() {
  return (
    <div className="bg-gradient-to-r from-[#05262b] via-[#1d434a] to-[#aa56fd] h-screen p-5">
      <h1 className="text-white text-3xl font-bold m-2">
        User Information Form
      </h1>
      <div className="border rounded-md p-2 flex gap-2 flex-wrap">
        <DynamicInput label="First Name" name="firstName" type="text" />
        <DynamicInput label="Last Name" name="lastName" type="text" />
        <DynamicInput label="Address" name="address" type="text" />
        <DynamicInput
          label="Preferred Contact Method"
          name="contactMethod"
          type="radio"
        />
      </div>
    </div>
  );
}
