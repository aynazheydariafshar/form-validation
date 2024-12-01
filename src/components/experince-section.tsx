import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// icons
import { CirclePlus, Trash } from "lucide-react";
// components ui
import { Button } from "./ui/button";
import { CardTitleForm } from "./ui/card-title-form";
import { Input } from "./ui/input";
import { ExperinceTable } from "./experince-table";
// validations
import experienceSchema, {
  ExperinceType,
} from "../validations/experince-schema";
// utils
import { generateUniqueId } from "../utils/generate-unique-id";
// types
import { ExperinceSectionPropsType } from "../types/experince-section-props";
import { ExperinceItemType } from "../types/experince-item";

const ExperinceSection = ({
  setExperienceData,
}: ExperinceSectionPropsType) => {
  const {
    register,
    control,
    getValues,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExperinceType>({
    resolver: yupResolver(experienceSchema),
    defaultValues: {
      experienceItems: [],
      experience: "",
      duration: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experienceItems",
  });

  const addExperience = (data: ExperinceType) => {
    if (getValues("experience") && getValues("duration")) {
      const newData = {
        id: generateUniqueId(),
        experience: getValues("experience"),
        duration: getValues("duration"),
      };
      append(newData);
      setExperienceData([
        ...(data.experienceItems as ExperinceItemType[]),
        newData,
      ]);
      setValue("experience", "");
      setValue("duration", 0);
    }
  };

  const handleRemove = (id: string, index: number) => {
    const updatedItems = fields.filter((item) => item.id !== id);
    setExperienceData(updatedItems);
    remove(index);
  };

  const handleClearAllExperince = () => {
    reset();
    setExperienceData([]);
  };

  return (
    <CardTitleForm title="Experience Section">
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
      <div>
        <Button onClick={handleSubmit(addExperience)} title="Add Experience">
          <CirclePlus size={18} />
        </Button>
      </div>
      <ExperinceTable fields={fields} remove={handleRemove} />
      {fields.length > 0 && (
        <div className="flex gap-2 mt-4">
          <Button
            className="bg-orange-600 hover:bg-orange-700"
            onClick={handleClearAllExperince}
            title="Clear All Experience"
          >
            <Trash size={18} />
          </Button>
        </div>
      )}
    </CardTitleForm>
  );
};

export default ExperinceSection;
