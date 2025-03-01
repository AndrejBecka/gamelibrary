import { z } from "zod";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";
import { GameUpdateWithoutCategoryInputObjectSchema } from "./GameUpdateWithoutCategoryInput.schema";
import { GameUncheckedUpdateWithoutCategoryInputObjectSchema } from "./GameUncheckedUpdateWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameUpdateWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => GameWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => GameUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => GameUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const GameUpdateWithWhereUniqueWithoutCategoryInputObjectSchema = Schema;
