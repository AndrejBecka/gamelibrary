import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import {
  SpecialOfferFindUniqueSchema,
  SpecialOfferUpdateOneSchema,
} from "~/zod/schemas";

export const specialOfferRouter = createTRPCRouter({
  listSpecialOffers: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.specialOffer.findMany();
  }),

  getSpecialOffer: publicProcedure
    .input(SpecialOfferFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.specialOffer.findUnique(input);
    }),

  updateSpecialOffer: privateProcedure
    .input(SpecialOfferUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const { where, data } = input;
      return ctx.db.specialOffer.update({
        where,
        data,
      });
    }),
});
