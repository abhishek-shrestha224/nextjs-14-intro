export type UserType = {
  id: number;
  name: string;
  age: number;
  gender: "M" | "F";
  isEnrolled: boolean;
};

export const User: UserType[] = [
  { id: 1, name: "Abhishek Shrestha", age: 20, gender: "M", isEnrolled: true },
  { id: 2, name: "Mittie Peterson", age: 14, gender: "F", isEnrolled: false },
  { id: 3, name: "Lois Fernandez", age: 13, gender: "F", isEnrolled: true },
];
