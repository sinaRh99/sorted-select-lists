export enum FilterTypes {
  age = "age",
  score = "score",
}

export enum FiltersFlow {
  asc = "asc",
  des = "des",
}

export enum FilterKeysEnum {
  type = "type",
  flow = "flow",
}

export interface IOnChangeProps {
  key: FilterKeysEnum;
  value: string;
}
