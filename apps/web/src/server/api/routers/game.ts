import {
  GameCreateOneSchema,
  GameDeleteOneSchema,
  GameFindUniqueSchema,
  GameUpdateOneSchema,
} from "zod/schemas";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const gameRouter = createTRPCRouter({
  listGames: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.game.findMany();
  }),

  getGame: publicProcedure
    .input(GameFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.game.findUnique(input);
    }),

  createGame: privateProcedure
    .input(GameCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.game.create(input);
    }),

  updateGame: privateProcedure
    .input(GameUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const { where, data } = input;
      return ctx.db.game.update({
        where,
        data,
      });
    }),

  deleteGame: privateProcedure
    .input(GameDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.game.delete({
        where: input.where,
      });
    }),

  listGamesWithOffers: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.game.findMany({
      where: {
        specialOfferId: { not: null },
      },
      include: { specialOffer: true },
    });
  }),

  getLatestGames: publicProcedure.query(async ({ ctx }) => {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    return ctx.db.game.findMany({
      where: {
        releaseDate: { gte: sixMonthsAgo },
      },
      orderBy: { releaseDate: "desc" },
      take: 10,
    });
  }),
});
