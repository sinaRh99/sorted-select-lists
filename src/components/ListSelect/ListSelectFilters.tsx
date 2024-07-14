import { BarsArrowDown, BarsArrowUp } from "../Icons";
import {
  FilterKeysEnum,
  FilterTypes,
  FiltersFlow,
  IOnChangeProps,
} from "./types";

interface IProps {
  type: FilterTypes;
  flow: FiltersFlow;
  onChange: (e: IOnChangeProps) => void;
}

export default function ListSelectFilters({ type, flow, onChange }: IProps) {
  return (
    <div className="bg-sky-500 absolute right-1/2 top-0 translate-x-1/2 -translate-y-full w-36 h-14 rounded-t-lg flex justify-around gap-2 items-center px-2">
      <select
        value={type}
        className="bg-white text-black border-none outline-none rounded-md p-2 h-10"
        onChange={(e) =>
          onChange({ key: FilterKeysEnum.type, value: e.target.value })
        }
      >
        <option value={FilterTypes.age}>Age</option>
        <option value={FilterTypes.score}>Score</option>
      </select>
      <div
        className="bg-blue-700 p-2 rounded-md cursor-pointer"
        onClick={() =>
          onChange({
            key: FilterKeysEnum.flow,
            value: flow === FiltersFlow.des ? FiltersFlow.asc : FiltersFlow.des,
          })
        }
      >
        {flow === FiltersFlow.des ? <BarsArrowDown /> : <BarsArrowUp />}
      </div>
    </div>
  );
}
