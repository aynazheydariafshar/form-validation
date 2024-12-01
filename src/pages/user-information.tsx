import { SendHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Radio } from "../components/ui/radio";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userInformationSchema, {
  UserInformationType,
} from "../validations/user-information-schema";
import { CardTitleForm } from "../components/ui/card-title-form";
import ExperinceSection from "../components/experince-section";
import { useState } from "react";
import { ExperinceItemType } from "../types/experince-item";

const contactMethodsItems = [
  { label: "Phone Number", value: "phoneNumber" },
  { label: "Email", value: "email" },
];

export default function UserInformation() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userInformationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      address: "",
      preferredContactMethod: "phoneNumber",
      phoneNumber: "",
      email: "",
    },
  });

  const [experienceData, setExperienceData] = useState<ExperinceItemType[]>([]);

  const handle = (data: UserInformationType) => {
    console.log({ ...data, experienceData });
    reset();
    setExperienceData([]);
  };

  return (
    <div className="bg-gradient-to-r from-[#05262b] via-[#1d434a] to-[#aa56fd] min-h-screen p-20">
      <CardTitleForm title="User Information Form">
        <div className="flex gap-2">
          <Input
            errors={errors}
            register={register}
            label="First Name"
            name="firstName"
            type="text"
          />
          <Input
            errors={errors}
            register={register}
            label="Last Name"
            name="lastName"
            type="text"
          />
          <Input
            errors={errors}
            register={register}
            label="Address"
            name="address"
            type="text"
          />
        </div>
        <div className="flex p-2">
          <Radio
            register={register}
            errors={errors}
            radioItems={contactMethodsItems}
            title="Preferred Contact Method"
            name="preferredContactMethod"
          />
        </div>
        <div className="flex gap-2">
          <Input
            errors={errors}
            register={register}
            label="Phone Number"
            name="phoneNumber"
            type="number"
          />
          <Input
            errors={errors}
            register={register}
            label="Email"
            name="email"
            type="email"
          />
        </div>
        <ExperinceSection setExperienceData={setExperienceData} />
        <div className="flex justify-end gap-2">
          <Button onClick={handleSubmit(handle)} title="submit">
            <SendHorizontal size={18} />
          </Button>
        </div>
      </CardTitleForm>
    </div>
  );
}
