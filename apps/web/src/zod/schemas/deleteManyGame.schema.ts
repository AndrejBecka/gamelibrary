import { z } from "zod";
import { GameWhereInputObjectSchema } from "./objects/GameWhereInput.schema";

export const GameDeleteManySchema = z.object({
  where: GameWhereInputObjectSchema.optional(),
});
