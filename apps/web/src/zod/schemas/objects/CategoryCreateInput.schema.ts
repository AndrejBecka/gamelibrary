import { z } from "zod";
import { GameCreateNestedManyWithoutCategoryInputObjectSchema } from "./GameCreateNestedManyWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    image: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    games: z
      .lazy(() => GameCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateInputObjectSchema = Schema;
