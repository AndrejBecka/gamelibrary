import { z } from "zod";
import { GameCreateWithoutCategoryInputObjectSchema } from "./GameCreateWithoutCategoryInput.schema";
import { GameUncheckedCreateWithoutCategoryInputObjectSchema } from "./GameUncheckedCreateWithoutCategoryInput.schema";
import { GameCreateOrConnectWithoutCategoryInputObjectSchema } from "./GameCreateOrConnectWithoutCategoryInput.schema";
import { GameUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from "./GameUpsertWithWhereUniqueWithoutCategoryInput.schema";
import { GameCreateManyCategoryInputEnvelopeObjectSchema } from "./GameCreateManyCategoryInputEnvelope.schema";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";
import { GameUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from "./GameUpdateWithWhereUniqueWithoutCategoryInput.schema";
import { GameUpdateManyWithWhereWithoutCategoryInputObjectSchema } from "./GameUpdateManyWithWhereWithoutCategoryInput.schema";
import { GameScalarWhereInputObjectSchema } from "./GameScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameUpdateManyWithoutCategoryNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => GameCreateWithoutCategoryInputObjectSchema),
        z.lazy(() => GameCreateWithoutCategoryInputObjectSchema).array(),
        z.lazy(() => GameUncheckedCreateWithoutCategoryInputObjectSchema),
        z
          .lazy(() => GameUncheckedCreateWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => GameCreateOrConnectWithoutCategoryInputObjectSchema),
        z
          .lazy(() => GameCreateOrConnectWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => GameUpsertWithWhereUniqueWithoutCategoryInputObjectSchema),
        z
          .lazy(() => GameUpsertWithWhereUniqueWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => GameCreateManyCategoryInputEnvelopeObjectSchema)
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
        z.lazy(() => GameUpdateWithWhereUniqueWithoutCategoryInputObjectSchema),
        z
          .lazy(() => GameUpdateWithWhereUniqueWithoutCategoryInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => GameUpdateManyWithWhereWithoutCategoryInputObjectSchema),
        z
          .lazy(() => GameUpdateManyWithWhereWithoutCategoryInputObjectSchema)
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

export const GameUpdateManyWithoutCategoryNestedInputObjectSchema = Schema;
