import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameUncheckedCreateWithoutCategoryInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string().optional().nullable(),
    coverImage: z.string(),
    rating: z.number(),
    releaseDate: z.coerce.date(),
    publisher: z.string().optional().nullable(),
    price: z.number(),
    discount: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    specialOfferId: z.string().optional().nullable(),
  })
  .strict();

export const GameUncheckedCreateWithoutCategoryInputObjectSchema = Schema;
