import { z } from "zod";
import { GameWhereInputObjectSchema } from "./objects/GameWhereInput.schema";
import { GameOrderByWithAggregationInputObjectSchema } from "./objects/GameOrderByWithAggregationInput.schema";
import { GameScalarWhereWithAggregatesInputObjectSchema } from "./objects/GameScalarWhereWithAggregatesInput.schema";
import { GameScalarFieldEnumSchema } from "./enums/GameScalarFieldEnum.schema";

export const GameGroupBySchema = z.object({
  where: GameWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      GameOrderByWithAggregationInputObjectSchema,
      GameOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: GameScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(GameScalarFieldEnumSchema),
});
