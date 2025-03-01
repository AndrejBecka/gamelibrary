import { z } from "zod";
import { GameOrderByWithRelationInputObjectSchema } from "./objects/GameOrderByWithRelationInput.schema";
import { GameWhereInputObjectSchema } from "./objects/GameWhereInput.schema";
import { GameWhereUniqueInputObjectSchema } from "./objects/GameWhereUniqueInput.schema";
import { GameScalarFieldEnumSchema } from "./enums/GameScalarFieldEnum.schema";

export const GameFindFirstSchema = z.object({
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
  distinct: z.array(GameScalarFieldEnumSchema).optional(),
});
