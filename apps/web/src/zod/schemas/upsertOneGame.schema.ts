import { z } from "zod";
import { GameWhereUniqueInputObjectSchema } from "./objects/GameWhereUniqueInput.schema";
import { GameCreateInputObjectSchema } from "./objects/GameCreateInput.schema";
import { GameUncheckedCreateInputObjectSchema } from "./objects/GameUncheckedCreateInput.schema";
import { GameUpdateInputObjectSchema } from "./objects/GameUpdateInput.schema";
import { GameUncheckedUpdateInputObjectSchema } from "./objects/GameUncheckedUpdateInput.schema";

export const GameUpsertSchema = z.object({
  where: GameWhereUniqueInputObjectSchema,
  create: z.union([
    GameCreateInputObjectSchema,
    GameUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    GameUpdateInputObjectSchema,
    GameUncheckedUpdateInputObjectSchema,
  ]),
});
