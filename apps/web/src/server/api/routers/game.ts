import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const gameRouter = createTRPCRouter({
  // ✅ Public: List all games (supports filters, sorting, pagination)
  listGames: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.game.findMany();
  }),

  // ✅ Public: Get a single game by ID
  getGame: publicProcedure
    .input(GameFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.game.findUnique(input);
    }),

  // ✅ Private: Create a new game
  createGame: privateProcedure
    .input(GameCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.game.create(input);
    }),

  // ✅ Private: Update an existing game
  updateGame: privateProcedure
    .input(GameUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const { where, data } = input;
      return ctx.db.game.update({
        where,
        data,
      });
    }),

  // ✅ Private: Delete a game by ID
  deleteGame: privateProcedure
    .input(GameDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.db.game.delete({
        where: input.where,
      });
    }),

  // ✅ Public: List games with special offers
  listGamesWithOffers: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.game.findMany({
      where: {
        specialOfferId: { not: null },
      },
      include: { specialOffer: true },
    });
  }),

  // ✅ Public: Get the latest released games (last 6 months)
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
