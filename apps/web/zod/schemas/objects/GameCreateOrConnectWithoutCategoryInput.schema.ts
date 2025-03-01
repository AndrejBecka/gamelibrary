import { z } from "zod";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";
import { GameCreateWithoutCategoryInputObjectSchema } from "./GameCreateWithoutCategoryInput.schema";
import { GameUncheckedCreateWithoutCategoryInputObjectSchema } from "./GameUncheckedCreateWithoutCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameCreateOrConnectWithoutCategoryInput> = z
  .object({
    where: z.lazy(() => GameWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GameCreateWithoutCategoryInputObjectSchema),
      z.lazy(() => GameUncheckedCreateWithoutCategoryInputObjectSchema),
    ]),
  })
  .strict();

export const GameCreateOrConnectWithoutCategoryInputObjectSchema = Schema;
