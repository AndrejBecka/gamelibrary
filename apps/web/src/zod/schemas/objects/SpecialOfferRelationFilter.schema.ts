import { z } from "zod";
import { SpecialOfferWhereInputObjectSchema } from "./SpecialOfferWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferRelationFilter> = z
  .object({
    is: z
      .lazy(() => SpecialOfferWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SpecialOfferWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const SpecialOfferRelationFilterObjectSchema = Schema;
