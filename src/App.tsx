import { useEffect, useState } from "react";

import { users } from "./fake-api/users";
import { ISelectableUser } from "./types/users";

import ListSelect from "./components/ListSelect/ListSelect";
import Button from "./components/Button";
import { ArrowRightIcon } from "./components/Icons";

interface IUsersList {
  first: ISelectableUser[];
  second: ISelectableUser[];
}

enum ListsEnum {
  first = "first",
  second = "second",
}

function App() {
  const [usersList, setUsersList] = useState<IUsersList>({
    first: [],
    second: [],
  });

  useEffect(() => {
    setUsers();
  }, []);

  const setUsers = () => {
    const newUsersList: IUsersList = {
      first: users.map((user) => ({ ...user, isSelected: false })),
      second: [],
    };
    setUsersList(newUsersList);
  };

  const handleSelectUser = (list: ListsEnum, id: string) => {
    setUsersList((users) => {
      const userIndex = users[list].findIndex((user) => user.id === id);
      return {
        ...users,
        [list]: users[list].map((user, i) => ({
          ...user,
          isSelected: i === userIndex ? !user.isSelected : user.isSelected,
        })),
      };
    });
  };

  const handleMoveUsers = (from: ListsEnum, to: ListsEnum) => {
    setUsersList((users) => {
      return {
        ...users,
        [from]: users[from].filter((user) => !user.isSelected),
        [to]: [
          ...users[to],
          ...users[from]
            .filter((user) => user.isSelected)
            .map((user) => ({ ...user, isSelected: false })),
        ],
      };
    });
  };

  return (
    <div className=" flex w-full py-24 min-h-screen items-center justify-center">
      <div className="w-400 h-full flex justify-between gap-20">
        <ListSelect
          // hasFilters
          users={usersList.first}
          handleSelectUser={(id: string) =>
            handleSelectUser(ListsEnum.first, id)
          }
        />
        <Button
          onClick={() => handleMoveUsers(ListsEnum.first, ListsEnum.second)}
          disabled={
            usersList[ListsEnum.first].filter((user) => user.isSelected)
              .length === 0
          }
        >
          <ArrowRightIcon />
        </Button>
        <ListSelect
          hasFilters
          users={usersList.second}
          handleSelectUser={(id: string) =>
            handleSelectUser(ListsEnum.second, id)
          }
        />
      </div>
    </div>
  );
}

export default App;
