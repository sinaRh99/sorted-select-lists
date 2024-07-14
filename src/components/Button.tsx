import { MouseEvent } from "react";

interface IProps {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  children: JSX.Element;
  disabled: boolean;
}

export default function Button({ onClick, children, disabled }: IProps) {
  return (
    <button
      className="bg-sky-600 hover:bg-sky-500 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors duration-75 h-12 w-24 flex justify-center items-center rounded-lg"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
