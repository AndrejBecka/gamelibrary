import { z } from "zod";
import { GameWhereInputObjectSchema } from "./GameWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameListRelationFilter> = z
  .object({
    every: z.lazy(() => GameWhereInputObjectSchema).optional(),
    some: z.lazy(() => GameWhereInputObjectSchema).optional(),
    none: z.lazy(() => GameWhereInputObjectSchema).optional(),
  })
  .strict();

export const GameListRelationFilterObjectSchema = Schema;
