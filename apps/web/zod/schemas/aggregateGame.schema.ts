import { z } from "zod";
import { GameOrderByWithRelationInputObjectSchema } from "./objects/GameOrderByWithRelationInput.schema";
import { GameWhereInputObjectSchema } from "./objects/GameWhereInput.schema";
import { GameWhereUniqueInputObjectSchema } from "./objects/GameWhereUniqueInput.schema";
import { GameCountAggregateInputObjectSchema } from "./objects/GameCountAggregateInput.schema";
import { GameMinAggregateInputObjectSchema } from "./objects/GameMinAggregateInput.schema";
import { GameMaxAggregateInputObjectSchema } from "./objects/GameMaxAggregateInput.schema";
import { GameAvgAggregateInputObjectSchema } from "./objects/GameAvgAggregateInput.schema";
import { GameSumAggregateInputObjectSchema } from "./objects/GameSumAggregateInput.schema";

export const GameAggregateSchema = z.object({
  orderBy: z
    .union([
      GameOrderByWithRelationInputObjectSchema,
      GameOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: GameWhereInputObjectSchema.optional(),
  cursor: GameWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), GameCountAggregateInputObjectSchema])
    .optional(),
  _min: GameMinAggregateInputObjectSchema.optional(),
  _max: GameMaxAggregateInputObjectSchema.optional(),
  _avg: GameAvgAggregateInputObjectSchema.optional(),
  _sum: GameSumAggregateInputObjectSchema.optional(),
});
