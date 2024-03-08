import { comment } from "postcss";
import { User, UserType } from "./data";

export async function GET() {
  return Response.json(User);
}
export async function POST(req: Request) {
  const users: UserType = await req.json();
  const newUser = {
    id: User.length + 1,
    name: users.name,
    age: users.age,
    gender: users.gender,
    isEnrolled: users.isEnrolled,
  };

  User.push(newUser);

  return new Response(JSON.stringify(User), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
