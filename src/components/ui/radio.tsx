import { RadioProps } from "../../types/radio-props";
import { useForm } from "react-hook-form";

export function Radio({ title, radioItems, name }: RadioProps) {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex items-center gap-2 text-white">
      <p>{title} : </p>
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
