import { z } from "zod";
import { SortOrderSchema } from "../enums/SortOrder.schema";
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema";
import { GameCountOrderByAggregateInputObjectSchema } from "./GameCountOrderByAggregateInput.schema";
import { GameAvgOrderByAggregateInputObjectSchema } from "./GameAvgOrderByAggregateInput.schema";
import { GameMaxOrderByAggregateInputObjectSchema } from "./GameMaxOrderByAggregateInput.schema";
import { GameMinOrderByAggregateInputObjectSchema } from "./GameMinOrderByAggregateInput.schema";
import { GameSumOrderByAggregateInputObjectSchema } from "./GameSumOrderByAggregateInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    coverImage: z.lazy(() => SortOrderSchema).optional(),
    rating: z.lazy(() => SortOrderSchema).optional(),
    categoryId: z.lazy(() => SortOrderSchema).optional(),
    releaseDate: z.lazy(() => SortOrderSchema).optional(),
    publisher: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    discount: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    specialOfferId: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => GameCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => GameAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => GameMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => GameMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => GameSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const GameOrderByWithAggregationInputObjectSchema = Schema;
