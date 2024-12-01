// components ui
import { ButtonPropsType } from "../../types/button-props";

export function Button({
  title,
  onClick,
  children,
  className,
}: ButtonPropsType) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 flex items-center gap-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {title}
      <div>{children}</div>
    </button>
  );
}
