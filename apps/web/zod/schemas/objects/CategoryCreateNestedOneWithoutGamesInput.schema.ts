import { z } from "zod";
import { CategoryCreateWithoutGamesInputObjectSchema } from "./CategoryCreateWithoutGamesInput.schema";
import { CategoryUncheckedCreateWithoutGamesInputObjectSchema } from "./CategoryUncheckedCreateWithoutGamesInput.schema";
import { CategoryCreateOrConnectWithoutGamesInputObjectSchema } from "./CategoryCreateOrConnectWithoutGamesInput.schema";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutGamesInput> = z
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
    connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const CategoryCreateNestedOneWithoutGamesInputObjectSchema = Schema;
