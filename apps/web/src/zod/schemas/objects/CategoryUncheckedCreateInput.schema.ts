import { z } from "zod";
import { GameUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from "./GameUncheckedCreateNestedManyWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    image: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    games: z
      .lazy(() => GameUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUncheckedCreateInputObjectSchema = Schema;
