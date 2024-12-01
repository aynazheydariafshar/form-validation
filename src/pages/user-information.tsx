import { SendHorizontal } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Radio } from "../components/ui/radio";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import userInformationSchema from "../validations/user-information-schema";
import { CardTitleForm } from "../components/ui/card-title-form";
import ExperinceSection from "../components/experince-section";
import { useState } from "react";

const contactMethodsItems = [
  { label: "Phone Number", value: "phoneNumber" },
  { label: "Email", value: "email" },
];

export default function UserInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userInformationSchema),
    defaultValues: {
      preferredContactMethod: "phoneNumber",
    },
  });

  const [experienceData, setExperienceData] = useState([]);

  const handle = (data: any) => {
    console.log(experienceData);
    console.log({ ...data, experienceData });
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
        {/* <CardTitleForm title="Experience Section">
          <div className="flex flex-wrap gap-2 items-end">
            <Input
              errors={errors}
              register={register}
              label="Experience"
              name="experience"
              type="text"
            />
            <Input
              errors={errors}
              register={register}
              label="Duration(months)"
              name="duration"
              type="number"
            />
          </div>
          <div className="p-2">
            <Button onClick={addExperience} title="Add Experience">
              <CirclePlus size={18} />
            </Button>
          </div>
          <ExperinceTable fields={fields} remove={remove} />
        </CardTitleForm> */}
        <div className="flex justify-end gap-2">
          <Button onClick={handleSubmit(handle)} title="submit">
            <SendHorizontal size={18} />
          </Button>
        </div>
      </CardTitleForm>
    </div>
  );
}
