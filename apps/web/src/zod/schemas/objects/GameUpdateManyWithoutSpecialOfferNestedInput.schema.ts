import { z } from "zod";
import { GameCreateWithoutSpecialOfferInputObjectSchema } from "./GameCreateWithoutSpecialOfferInput.schema";
import { GameUncheckedCreateWithoutSpecialOfferInputObjectSchema } from "./GameUncheckedCreateWithoutSpecialOfferInput.schema";
import { GameCreateOrConnectWithoutSpecialOfferInputObjectSchema } from "./GameCreateOrConnectWithoutSpecialOfferInput.schema";
import { GameUpsertWithWhereUniqueWithoutSpecialOfferInputObjectSchema } from "./GameUpsertWithWhereUniqueWithoutSpecialOfferInput.schema";
import { GameCreateManySpecialOfferInputEnvelopeObjectSchema } from "./GameCreateManySpecialOfferInputEnvelope.schema";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";
import { GameUpdateWithWhereUniqueWithoutSpecialOfferInputObjectSchema } from "./GameUpdateWithWhereUniqueWithoutSpecialOfferInput.schema";
import { GameUpdateManyWithWhereWithoutSpecialOfferInputObjectSchema } from "./GameUpdateManyWithWhereWithoutSpecialOfferInput.schema";
import { GameScalarWhereInputObjectSchema } from "./GameScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameUpdateManyWithoutSpecialOfferNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => GameUpsertWithWhereUniqueWithoutSpecialOfferInputObjectSchema
        ),
        z
          .lazy(
            () => GameUpsertWithWhereUniqueWithoutSpecialOfferInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => GameCreateManySpecialOfferInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => GameWhereUniqueInputObjectSchema),
        z.lazy(() => GameWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => GameWhereUniqueInputObjectSchema),
        z.lazy(() => GameWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => GameWhereUniqueInputObjectSchema),
        z.lazy(() => GameWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => GameWhereUniqueInputObjectSchema),
        z.lazy(() => GameWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(
          () => GameUpdateWithWhereUniqueWithoutSpecialOfferInputObjectSchema
        ),
        z
          .lazy(
            () => GameUpdateWithWhereUniqueWithoutSpecialOfferInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => GameUpdateManyWithWhereWithoutSpecialOfferInputObjectSchema
        ),
        z
          .lazy(
            () => GameUpdateManyWithWhereWithoutSpecialOfferInputObjectSchema
          )
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => GameScalarWhereInputObjectSchema),
        z.lazy(() => GameScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const GameUpdateManyWithoutSpecialOfferNestedInputObjectSchema = Schema;
