import { z } from "zod";
import { GameCreateManySpecialOfferInputObjectSchema } from "./GameCreateManySpecialOfferInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameCreateManySpecialOfferInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => GameCreateManySpecialOfferInputObjectSchema),
      z.lazy(() => GameCreateManySpecialOfferInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const GameCreateManySpecialOfferInputEnvelopeObjectSchema = Schema;
