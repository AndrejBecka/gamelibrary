import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameSumAggregateInputType> = z
  .object({
    rating: z.literal(true).optional(),
    price: z.literal(true).optional(),
    discount: z.literal(true).optional(),
  })
  .strict();

export const GameSumAggregateInputObjectSchema = Schema;
