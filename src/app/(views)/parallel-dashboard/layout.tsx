import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  users: ReactNode;
  articles: ReactNode;
  analytics: ReactNode;
};
export default function DashboardLayout({
  children,
  users,
  articles,
  analytics,
}: Props) {
  return (
    <div className="mx-auto my-8 h-[80vh] flex gap-2 flex-col w-3/5 justify-start items-center">
      {children}
      <div className="h-40 flex w-full gap-2 justify-between items-center">
        {users}
        {analytics}
      </div>
      {articles}
    </div>
  );
}
