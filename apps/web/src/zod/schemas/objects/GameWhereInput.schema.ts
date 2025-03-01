import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema";
import { FloatFilterObjectSchema } from "./FloatFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { FloatNullableFilterObjectSchema } from "./FloatNullableFilter.schema";
import { CategoryRelationFilterObjectSchema } from "./CategoryRelationFilter.schema";
import { CategoryWhereInputObjectSchema } from "./CategoryWhereInput.schema";
import { SpecialOfferRelationFilterObjectSchema } from "./SpecialOfferRelationFilter.schema";
import { SpecialOfferWhereInputObjectSchema } from "./SpecialOfferWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => GameWhereInputObjectSchema),
        z.lazy(() => GameWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => GameWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => GameWhereInputObjectSchema),
        z.lazy(() => GameWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    coverImage: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    rating: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    categoryId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    releaseDate: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    publisher: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    price: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    discount: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    specialOfferId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional(),
    specialOffer: z
      .union([
        z.lazy(() => SpecialOfferRelationFilterObjectSchema),
        z.lazy(() => SpecialOfferWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const GameWhereInputObjectSchema = Schema;
