import { ButtonPropsType } from "../../types/button-props";

export function Button({ title, children }: ButtonPropsType) {
  return (
    <button className="bg-purple-600 flex items-center gap-2 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
      {title}
      <div>{children}</div>
    </button>
  );
}
