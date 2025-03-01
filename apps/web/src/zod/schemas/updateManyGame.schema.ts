import { z } from "zod";
import { GameUpdateManyMutationInputObjectSchema } from "./objects/GameUpdateManyMutationInput.schema";
import { GameWhereInputObjectSchema } from "./objects/GameWhereInput.schema";

export const GameUpdateManySchema = z.object({
  data: GameUpdateManyMutationInputObjectSchema,
  where: GameWhereInputObjectSchema.optional(),
});
