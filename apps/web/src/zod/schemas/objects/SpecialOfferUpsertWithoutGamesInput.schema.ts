import { z } from "zod";
import { SpecialOfferUpdateWithoutGamesInputObjectSchema } from "./SpecialOfferUpdateWithoutGamesInput.schema";
import { SpecialOfferUncheckedUpdateWithoutGamesInputObjectSchema } from "./SpecialOfferUncheckedUpdateWithoutGamesInput.schema";
import { SpecialOfferCreateWithoutGamesInputObjectSchema } from "./SpecialOfferCreateWithoutGamesInput.schema";
import { SpecialOfferUncheckedCreateWithoutGamesInputObjectSchema } from "./SpecialOfferUncheckedCreateWithoutGamesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferUpsertWithoutGamesInput> = z
  .object({
    update: z.union([
      z.lazy(() => SpecialOfferUpdateWithoutGamesInputObjectSchema),
      z.lazy(() => SpecialOfferUncheckedUpdateWithoutGamesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SpecialOfferCreateWithoutGamesInputObjectSchema),
      z.lazy(() => SpecialOfferUncheckedCreateWithoutGamesInputObjectSchema),
    ]),
  })
  .strict();

export const SpecialOfferUpsertWithoutGamesInputObjectSchema = Schema;
