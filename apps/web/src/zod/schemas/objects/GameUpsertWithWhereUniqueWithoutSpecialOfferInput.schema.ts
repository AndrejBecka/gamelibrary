import { z } from "zod";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";
import { GameUpdateWithoutSpecialOfferInputObjectSchema } from "./GameUpdateWithoutSpecialOfferInput.schema";
import { GameUncheckedUpdateWithoutSpecialOfferInputObjectSchema } from "./GameUncheckedUpdateWithoutSpecialOfferInput.schema";
import { GameCreateWithoutSpecialOfferInputObjectSchema } from "./GameCreateWithoutSpecialOfferInput.schema";
import { GameUncheckedCreateWithoutSpecialOfferInputObjectSchema } from "./GameUncheckedCreateWithoutSpecialOfferInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameUpsertWithWhereUniqueWithoutSpecialOfferInput> =
  z
    .object({
      where: z.lazy(() => GameWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => GameUpdateWithoutSpecialOfferInputObjectSchema),
        z.lazy(() => GameUncheckedUpdateWithoutSpecialOfferInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => GameCreateWithoutSpecialOfferInputObjectSchema),
        z.lazy(() => GameUncheckedCreateWithoutSpecialOfferInputObjectSchema),
      ]),
    })
    .strict();

export const GameUpsertWithWhereUniqueWithoutSpecialOfferInputObjectSchema =
  Schema;
