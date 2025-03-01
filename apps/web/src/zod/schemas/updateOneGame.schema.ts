import { z } from "zod";
import { GameUpdateInputObjectSchema } from "./objects/GameUpdateInput.schema";
import { GameUncheckedUpdateInputObjectSchema } from "./objects/GameUncheckedUpdateInput.schema";
import { GameWhereUniqueInputObjectSchema } from "./objects/GameWhereUniqueInput.schema";

export const GameUpdateOneSchema = z.object({
  data: z.union([
    GameUpdateInputObjectSchema,
    GameUncheckedUpdateInputObjectSchema,
  ]),
  where: GameWhereUniqueInputObjectSchema,
});
