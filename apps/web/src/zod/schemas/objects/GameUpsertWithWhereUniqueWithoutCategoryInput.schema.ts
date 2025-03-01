import { z } from "zod";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";
import { GameUpdateWithoutCategoryInputObjectSchema } from "./GameUpdateWithoutCategoryInput.schema";
import { GameUncheckedUpdateWithoutCategoryInputObjectSchema } from "./GameUncheckedUpdateWithoutCategoryInput.schema";
import { GameCreateWithoutCategoryInputObjectSchema } from "./GameCreateWithoutCategoryInput.schema";
import { GameUncheckedCreateWithoutCategoryInputObjectSchema } from "./GameUncheckedCreateWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameUpsertWithWhereUniqueWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => GameWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => GameUpdateWithoutCategoryInputObjectSchema),
        z.lazy(() => GameUncheckedUpdateWithoutCategoryInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => GameCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => GameUncheckedCreateWithoutCategoryInputObjectSchema),
      ]),
    })
    .strict();

export const GameUpsertWithWhereUniqueWithoutCategoryInputObjectSchema = Schema;
