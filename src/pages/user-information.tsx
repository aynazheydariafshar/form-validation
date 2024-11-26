import Button from "../components/ui/button";
import { CardTitleForm } from "../components/ui/card-title-form";
import { Input } from "../components/ui/input";
import { Radio } from "../components/ui/radio";

const contactMethodsItems = [
  { label: "Phone Number", value: "phoneNumber" },
  { label: "Email", value: "email" },
];

export default function UserInformation() {
  return (
    <div className="bg-gradient-to-r from-[#05262b] via-[#1d434a] to-[#aa56fd] min-h-screen p-20">
      <div className="flex items-center justify-center gap-2">
        <CardTitleForm title="User Information Form">
          <div className="flex gap-2">
            <Input label="First Name" name="firstName" type="text" />
            <Input label="Last Name" name="lastName" type="text" />
            <Input label="Address" name="address" type="text" />
          </div>
          <div className="flex p-2">
            <Radio
              radioItems={contactMethodsItems}
              title="Preferred Contact Method"
              name="preferredContactMethod"
            />
          </div>
          <div className="flex gap-2">
            <Input label="Phone Number" name="phoneNumber" type="number" />
            <Input label="Email" name="email" type="email" />
          </div>
        </CardTitleForm>
        <CardTitleForm title="Experience Section">
          <div className="flex flex-col gap-2">
            <Input label="Experience" name="experience" type="text" />
            <Input label="Duration(months)" name="duration" type="number" />
          </div>
        </CardTitleForm>
      </div>
      <Button />
    </div>
  );
}
