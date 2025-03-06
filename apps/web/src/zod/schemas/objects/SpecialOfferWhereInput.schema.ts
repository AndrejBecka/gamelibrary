import { z } from "zod";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { GameListRelationFilterObjectSchema } from "./GameListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SpecialOfferWhereInputObjectSchema),
        z.lazy(() => SpecialOfferWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SpecialOfferWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SpecialOfferWhereInputObjectSchema),
        z.lazy(() => SpecialOfferWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    title: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    coverImage: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    games: z.lazy(() => GameListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const SpecialOfferWhereInputObjectSchema = Schema;
