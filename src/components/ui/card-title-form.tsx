//types
import { CardTitleFormProps } from "../../types/card-title-form-props";

export function CardTitleForm({ title, children }: CardTitleFormProps) {
  return (
    <div className="my-2">
      <div className="border rounded-lg p-5 flex flex-col bg-neutral-800">
        <h1 className="text-white text-3xl font-bold">{title}</h1>
        {children}
      </div>
    </div>
  );
}
