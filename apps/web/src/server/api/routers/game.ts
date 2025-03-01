import { GameCreateOneSchema } from "zod/schemas";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const gameRouter = createTRPCRouter({
  create: privateProcedure
    .input(GameCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.game.create(input);
    }),
});
