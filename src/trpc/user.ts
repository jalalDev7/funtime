import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const userRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id || !user.email)
      throw new TRPCError({ code: "UNAUTHORIZED" });

    // check if the user is in the database
    const dbUser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });

    if (!dbUser) {
      //create user in db
      const createUser = await db.user.create({
        data: {
          id: user.id,
          email: user.email,
          username: user.username || user.email,
          userDesc: `Welcome ${user.given_name} ${user.family_name}`,
        },
      });
      if (!createUser) throw new TRPCError({ code: "BAD_REQUEST" });
    }

    return { success: true };
  }),
});
