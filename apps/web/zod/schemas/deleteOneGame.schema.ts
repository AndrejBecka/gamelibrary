import { z } from "zod";
import { GameWhereUniqueInputObjectSchema } from "./objects/GameWhereUniqueInput.schema";

export const GameDeleteOneSchema = z.object({
  where: GameWhereUniqueInputObjectSchema,
});
