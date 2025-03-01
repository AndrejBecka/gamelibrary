import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { GameOrderByRelationAggregateInputObjectSchema } from "./GameOrderByRelationAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    coverImage: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    games: z
      .lazy(() => GameOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpecialOfferOrderByWithRelationInputObjectSchema = Schema;
