import { z } from "zod";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferCreateManyInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict();

export const SpecialOfferCreateManyInputObjectSchema = Schema;
