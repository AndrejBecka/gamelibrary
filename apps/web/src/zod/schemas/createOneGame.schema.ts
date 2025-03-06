import { z } from "zod";
import { GameCreateInputObjectSchema } from "./objects/GameCreateInput.schema";
import { GameUncheckedCreateInputObjectSchema } from "./objects/GameUncheckedCreateInput.schema";

export const GameCreateOneSchema = z.object({
  data: z.union([
    GameCreateInputObjectSchema,
    GameUncheckedCreateInputObjectSchema,
  ]),
});
