import { mergeRouters } from "./trpc";
import { userRouter } from "./user";

export const appRouter = mergeRouters(userRouter);

export type AppRouter = typeof appRouter;
