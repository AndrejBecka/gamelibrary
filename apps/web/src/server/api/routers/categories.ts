import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import {
  CategoryFindUniqueSchema,
  CategoryUpdateOneSchema,
} from "~/zod/schemas";

export const categoryRouter = createTRPCRouter({
  listCategories: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.category.findMany();
  }),

  getCategory: publicProcedure
    .input(CategoryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      return ctx.db.category.findUnique(input);
    }),

  updateCategory: privateProcedure
    .input(CategoryUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const { where, data } = input;
      return ctx.db.category.update({
        where,
        data,
      });
    }),
});
