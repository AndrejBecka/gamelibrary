import { z } from "zod";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";
import { GameUpdateWithoutSpecialOfferInputObjectSchema } from "./GameUpdateWithoutSpecialOfferInput.schema";
import { GameUncheckedUpdateWithoutSpecialOfferInputObjectSchema } from "./GameUncheckedUpdateWithoutSpecialOfferInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameUpdateWithWhereUniqueWithoutSpecialOfferInput> =
  z
    .object({
      where: z.lazy(() => GameWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => GameUpdateWithoutSpecialOfferInputObjectSchema),
        z.lazy(() => GameUncheckedUpdateWithoutSpecialOfferInputObjectSchema),
      ]),
    })
    .strict();

export const GameUpdateWithWhereUniqueWithoutSpecialOfferInputObjectSchema =
  Schema;
