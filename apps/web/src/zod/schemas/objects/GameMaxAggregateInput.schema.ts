import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    description: z.literal(true).optional(),
    coverImage: z.literal(true).optional(),
    rating: z.literal(true).optional(),
    categoryId: z.literal(true).optional(),
    releaseDate: z.literal(true).optional(),
    publisher: z.literal(true).optional(),
    price: z.literal(true).optional(),
    discount: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    specialOfferId: z.literal(true).optional(),
  })
  .strict();

export const GameMaxAggregateInputObjectSchema = Schema;
