import { z } from "zod";
import { GameCreateManyInputObjectSchema } from "./objects/GameCreateManyInput.schema";

export const GameCreateManySchema = z.object({
  data: z.union([
    GameCreateManyInputObjectSchema,
    z.array(GameCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
