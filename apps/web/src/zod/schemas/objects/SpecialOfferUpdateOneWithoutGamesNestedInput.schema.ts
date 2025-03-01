import { z } from "zod";
import { SpecialOfferCreateWithoutGamesInputObjectSchema } from "./SpecialOfferCreateWithoutGamesInput.schema";
import { SpecialOfferUncheckedCreateWithoutGamesInputObjectSchema } from "./SpecialOfferUncheckedCreateWithoutGamesInput.schema";
import { SpecialOfferCreateOrConnectWithoutGamesInputObjectSchema } from "./SpecialOfferCreateOrConnectWithoutGamesInput.schema";
import { SpecialOfferUpsertWithoutGamesInputObjectSchema } from "./SpecialOfferUpsertWithoutGamesInput.schema";
import { SpecialOfferWhereUniqueInputObjectSchema } from "./SpecialOfferWhereUniqueInput.schema";
import { SpecialOfferUpdateWithoutGamesInputObjectSchema } from "./SpecialOfferUpdateWithoutGamesInput.schema";
import { SpecialOfferUncheckedUpdateWithoutGamesInputObjectSchema } from "./SpecialOfferUncheckedUpdateWithoutGamesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.SpecialOfferUpdateOneWithoutGamesNestedInput> = z
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
    upsert: z
      .lazy(() => SpecialOfferUpsertWithoutGamesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => SpecialOfferWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => SpecialOfferUpdateWithoutGamesInputObjectSchema),
        z.lazy(() => SpecialOfferUncheckedUpdateWithoutGamesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SpecialOfferUpdateOneWithoutGamesNestedInputObjectSchema = Schema;
