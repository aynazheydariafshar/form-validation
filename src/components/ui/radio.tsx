// types
import { RadioProps } from "../../types/radio-props";

export function Radio({
  title,
  radioItems,
  name,
  errors,
  register,
}: RadioProps) {
  return (
    <div className="flex items-center gap-2 text-white">
      <p>{title} : </p>
      <div className="flex flex-wrap gap-2 items-center">
        {radioItems.map(({ label, value }) => (
          <div key={value}>
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
        {errors[name] && (
          <span className="text-red-600 font-bold text-sm">
            {(errors[name] as { message?: string }).message}{" "}
          </span>
        )}
      </div>
    </div>
  );
}
