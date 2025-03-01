import { z } from "zod";
import { GameUncheckedCreateNestedManyWithoutSpecialOfferInputObjectSchema } from "./GameUncheckedCreateNestedManyWithoutSpecialOfferInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    games: z
      .lazy(
        () => GameUncheckedCreateNestedManyWithoutSpecialOfferInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const SpecialOfferUncheckedCreateInputObjectSchema = Schema;
