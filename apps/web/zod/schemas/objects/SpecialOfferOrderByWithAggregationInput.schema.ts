import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SpecialOfferCountOrderByAggregateInputObjectSchema } from "./SpecialOfferCountOrderByAggregateInput.schema";
import { SpecialOfferMaxOrderByAggregateInputObjectSchema } from "./SpecialOfferMaxOrderByAggregateInput.schema";
import { SpecialOfferMinOrderByAggregateInputObjectSchema } from "./SpecialOfferMinOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    coverImage: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SpecialOfferCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => SpecialOfferMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => SpecialOfferMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SpecialOfferOrderByWithAggregationInputObjectSchema = Schema;
