import PageNotFound from "@/app/not-found";
import { getUserInfo } from "@/lib/actions/user.actions";
import { EUserRole } from "@/types/enums";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();
  // Middleware protects /manage routes; if there's no userId here,
  // return PageNotFound instead of redirecting to avoid double redirects.
  if (!userId) return <PageNotFound />;
  const user = await getUserInfo({ userId });
  if (user && user.role !== EUserRole.ADMIN) return <PageNotFound />;
  return <div>{children}</div>;
};

export default AdminLayout;
