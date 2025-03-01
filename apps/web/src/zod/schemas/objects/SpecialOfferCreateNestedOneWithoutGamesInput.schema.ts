import { z } from "zod";
import { SpecialOfferCreateWithoutGamesInputObjectSchema } from "./SpecialOfferCreateWithoutGamesInput.schema";
import { SpecialOfferUncheckedCreateWithoutGamesInputObjectSchema } from "./SpecialOfferUncheckedCreateWithoutGamesInput.schema";
import { SpecialOfferCreateOrConnectWithoutGamesInputObjectSchema } from "./SpecialOfferCreateOrConnectWithoutGamesInput.schema";
import { SpecialOfferWhereUniqueInputObjectSchema } from "./SpecialOfferWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferCreateNestedOneWithoutGamesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SpecialOfferCreateWithoutGamesInputObjectSchema),
        z.lazy(() => SpecialOfferUncheckedCreateWithoutGamesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => SpecialOfferCreateOrConnectWithoutGamesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => SpecialOfferWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const SpecialOfferCreateNestedOneWithoutGamesInputObjectSchema = Schema;
