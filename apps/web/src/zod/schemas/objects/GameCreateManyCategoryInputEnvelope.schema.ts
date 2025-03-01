import { z } from "zod";
import { GameCreateManyCategoryInputObjectSchema } from "./GameCreateManyCategoryInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameCreateManyCategoryInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => GameCreateManyCategoryInputObjectSchema),
      z.lazy(() => GameCreateManyCategoryInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const GameCreateManyCategoryInputEnvelopeObjectSchema = Schema;
