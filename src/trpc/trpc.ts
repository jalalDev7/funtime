import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const t = initTRPC.context<Context>().create();
const middleware = t.middleware;

const isAuth = middleware(async (opts) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || !user.id) throw new TRPCError({ code: "UNAUTHORIZED" });

  return opts.next({
    ctx: {
      user,
    },
  });
});

export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
