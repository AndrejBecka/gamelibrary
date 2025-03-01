import { z } from "zod";
import { GameCreateNestedManyWithoutSpecialOfferInputObjectSchema } from "./GameCreateNestedManyWithoutSpecialOfferInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    games: z
      .lazy(() => GameCreateNestedManyWithoutSpecialOfferInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpecialOfferCreateInputObjectSchema = Schema;
