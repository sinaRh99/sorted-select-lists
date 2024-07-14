import { ISelectableUser } from "../../types/users";

interface IProps {
  user: ISelectableUser;
  onClick: () => void;
}

export default function ListSelectItem({ user, onClick }: IProps) {
  return (
    <div
      onClick={onClick}
      className={`backdrop-blur-lg w-full ${
        user.isSelected ? "bg-blue-600 text-white" : "bg-white/30 text-sky-950"
      } hover:translate-x-1 transition-all ease-in-out duration-100 p-3 rounded-md cursor-pointer`}
    >
      <div className={`font-extrabold text-xl`}>
        {user.name} {user.age}
      </div>
      <div className={`text-sm font-light`}>score: {user.score}</div>
    </div>
  );
}
