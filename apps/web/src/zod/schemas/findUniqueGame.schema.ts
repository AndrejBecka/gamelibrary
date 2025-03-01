import { z } from "zod";
import { GameWhereUniqueInputObjectSchema } from "./objects/GameWhereUniqueInput.schema";

export const GameFindUniqueSchema = z.object({
  where: GameWhereUniqueInputObjectSchema,
});
