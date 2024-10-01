import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=/");

  const dbUser = await db.user.findFirst({
    select: {
      username: true,
      id: true,
      createdAt: true,
      userRank: true,
      userState: true,
    },
    where: {
      id: user.id,
    },
  });

  if (!dbUser) redirect("/auth-callback?origin=/");
  return <div>page</div>;
};

export default page;
