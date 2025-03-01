import { z } from "zod";
import { GameScalarWhereInputObjectSchema } from "./GameScalarWhereInput.schema";
import { GameUpdateManyMutationInputObjectSchema } from "./GameUpdateManyMutationInput.schema";
import { GameUncheckedUpdateManyWithoutGamesInputObjectSchema } from "./GameUncheckedUpdateManyWithoutGamesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameUpdateManyWithWhereWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => GameScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => GameUpdateManyMutationInputObjectSchema),
      z.lazy(() => GameUncheckedUpdateManyWithoutGamesInputObjectSchema),
    ]),
  })
  .strict();

export const GameUpdateManyWithWhereWithoutCategoryInputObjectSchema = Schema;
