import { z } from "zod";
import { CategoryWhereUniqueInputObjectSchema } from "./CategoryWhereUniqueInput.schema";
import { CategoryCreateWithoutGamesInputObjectSchema } from "./CategoryCreateWithoutGamesInput.schema";
import { CategoryUncheckedCreateWithoutGamesInputObjectSchema } from "./CategoryUncheckedCreateWithoutGamesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutGamesInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutGamesInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutGamesInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryCreateOrConnectWithoutGamesInputObjectSchema = Schema;
