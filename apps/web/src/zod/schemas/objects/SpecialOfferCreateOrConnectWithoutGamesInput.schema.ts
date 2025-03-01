import { z } from "zod";
import { SpecialOfferWhereUniqueInputObjectSchema } from "./SpecialOfferWhereUniqueInput.schema";
import { SpecialOfferCreateWithoutGamesInputObjectSchema } from "./SpecialOfferCreateWithoutGamesInput.schema";
import { SpecialOfferUncheckedCreateWithoutGamesInputObjectSchema } from "./SpecialOfferUncheckedCreateWithoutGamesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferCreateOrConnectWithoutGamesInput> = z
  .object({
    where: z.lazy(() => SpecialOfferWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SpecialOfferCreateWithoutGamesInputObjectSchema),
      z.lazy(() => SpecialOfferUncheckedCreateWithoutGamesInputObjectSchema),
    ]),
  })
  .strict();

export const SpecialOfferCreateOrConnectWithoutGamesInputObjectSchema = Schema;
