import React from "react";
import { DynamicInput } from "../components/dynamic-input";
import { DynamicRadio } from "../components/dynamic-radio";
import { CardTitleForm } from "../components/card-title-form";

const contactMethodsItems = [
  { label: "Phone Number", value: "phoneNumber" },
  { label: "Email", value: "email" },
];

export default function UserInformation() {
  return (
    <div className="bg-gradient-to-r from-[#05262b] via-[#1d434a] to-[#aa56fd] min-h-screen p-20">
      <CardTitleForm title="User Information Form">
        <div className="flex gap-2">
          <DynamicInput label="First Name" name="firstName" type="text" />
          <DynamicInput label="Last Name" name="lastName" type="text" />
          <DynamicInput label="Address" name="address" type="text" />
        </div>
        <div className="flex p-2">
          <DynamicRadio
            radioItems={contactMethodsItems}
            title="Preferred Contact Method"
            name="preferredContactMethod"
          />
        </div>
        <div className="flex gap-2">
          <DynamicInput label="Phone Number" name="phoneNumber" type="number" />
          <DynamicInput label="Email" name="email" type="email" />
        </div>
      </CardTitleForm>
      <CardTitleForm title="Experience Section">
        <div className="flex gap-2">
          <DynamicInput label="Experience" name="experience" type="text" />
          <DynamicInput
            label="Duration(months)"
            name="duration"
            type="number"
          />
        </div>
      </CardTitleForm>
    </div>
  );
}
