import { z } from "zod";
import { CategoryCreateWithoutGamesInputObjectSchema } from "./CategoryCreateWithoutGamesInput.schema";
import { CategoryUncheckedCreateWithoutGamesInputObjectSchema } from "./CategoryUncheckedCreateWithoutGamesInput.schema";
import { CategoryCreateOrConnectWithoutGamesInputObjectSchema } from "./CategoryCreateOrConnectWithoutGamesInput.schema";
import { CategoryUpsertWithoutGamesInputObjectSchema } from "./CategoryUpsertWithoutGamesInput.schema";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";
import { CategoryUpdateWithoutGamesInputObjectSchema } from "./CategoryUpdateWithoutGamesInput.schema";
import { CategoryUncheckedUpdateWithoutGamesInputObjectSchema } from "./CategoryUncheckedUpdateWithoutGamesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutGamesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CategoryCreateWithoutGamesInputObjectSchema),
          z.lazy(() => CategoryUncheckedCreateWithoutGamesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => CategoryCreateOrConnectWithoutGamesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => CategoryUpsertWithoutGamesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => CategoryUpdateWithoutGamesInputObjectSchema),
          z.lazy(() => CategoryUncheckedUpdateWithoutGamesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const CategoryUpdateOneRequiredWithoutGamesNestedInputObjectSchema =
  Schema;
