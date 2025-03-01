import { z } from "zod";
import { GameCreateWithoutSpecialOfferInputObjectSchema } from "./GameCreateWithoutSpecialOfferInput.schema";
import { GameUncheckedCreateWithoutSpecialOfferInputObjectSchema } from "./GameUncheckedCreateWithoutSpecialOfferInput.schema";
import { GameCreateOrConnectWithoutSpecialOfferInputObjectSchema } from "./GameCreateOrConnectWithoutSpecialOfferInput.schema";
import { GameCreateManySpecialOfferInputEnvelopeObjectSchema } from "./GameCreateManySpecialOfferInputEnvelope.schema";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameCreateNestedManyWithoutSpecialOfferInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GameCreateWithoutSpecialOfferInputObjectSchema),
        z.lazy(() => GameCreateWithoutSpecialOfferInputObjectSchema).array(),
        z.lazy(() => GameUncheckedCreateWithoutSpecialOfferInputObjectSchema),
        z
          .lazy(() => GameUncheckedCreateWithoutSpecialOfferInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => GameCreateOrConnectWithoutSpecialOfferInputObjectSchema),
        z
          .lazy(() => GameCreateOrConnectWithoutSpecialOfferInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => GameCreateManySpecialOfferInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => GameWhereUniqueInputObjectSchema),
        z.lazy(() => GameWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const GameCreateNestedManyWithoutSpecialOfferInputObjectSchema = Schema;
