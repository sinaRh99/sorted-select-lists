import { useMemo, useState } from "react";
import { ISelectableUser } from "../../types/users";
import ListSelectFilters from "./ListSelectFilters";
import ListSelectItem from "./ListSelectItem";
import { FilterTypes, FiltersFlow, IOnChangeProps } from "./types";

interface IProps {
  users: ISelectableUser[];
  handleSelectUser: (i: string) => void;
  hasFilters?: boolean;
}

export default function ListSelect({
  users,
  handleSelectUser,
  hasFilters = false,
}: IProps) {
  const [filters, setFilters] = useState<{
    type: FilterTypes;
    flow: FiltersFlow;
  }>({
    type: FilterTypes.age,
    flow: FiltersFlow.des,
  });

  const handleUpdateFilters = ({ key, value }: IOnChangeProps) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredUsers = useMemo(() => {
    if (!hasFilters) return users;
    else {
      return [...users].sort((a, b) => {
        if (filters.type === FilterTypes.age) {
          return filters.flow === FiltersFlow.des
            ? a.age - b.age
            : b.age - a.age;
        } else {
          return filters.flow === FiltersFlow.des
            ? Number(a.score) - Number(b.score)
            : Number(b.score) - Number(a.score);
        }
      });
    }
  }, [hasFilters, filters, users]);

  return (
    <div className="bg-gradient-to-b w-64 min-h-full from-cyan-500 to-blue-500 rounded-lg p-4 relative">
      {hasFilters && (
        <ListSelectFilters
          flow={filters.flow}
          type={filters.type}
          onChange={handleUpdateFilters}
        />
      )}
      <div className="w-full flex flex-col gap-4">
        {filteredUsers.map((user) => (
          <ListSelectItem
            key={user.id}
            user={user}
            onClick={() => handleSelectUser(user.id)}
          />
        ))}
      </div>
    </div>
  );
}
