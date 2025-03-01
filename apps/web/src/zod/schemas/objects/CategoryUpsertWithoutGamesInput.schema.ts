import { z } from "zod";
import { CategoryUpdateWithoutGamesInputObjectSchema } from "./CategoryUpdateWithoutGamesInput.schema";
import { CategoryUncheckedUpdateWithoutGamesInputObjectSchema } from "./CategoryUncheckedUpdateWithoutGamesInput.schema";
import { CategoryCreateWithoutGamesInputObjectSchema } from "./CategoryCreateWithoutGamesInput.schema";
import { CategoryUncheckedCreateWithoutGamesInputObjectSchema } from "./CategoryUncheckedCreateWithoutGamesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutGamesInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutGamesInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutGamesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutGamesInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutGamesInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutGamesInputObjectSchema = Schema;
