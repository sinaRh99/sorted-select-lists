export interface IUser {
  id: string;
  name: string;
  score: string;
  age: number;
}

export interface ISelectableUser extends IUser {
  isSelected: boolean;
}
