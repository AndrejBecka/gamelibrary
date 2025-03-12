import { z } from "zod";
import { GameCreateWithoutCategoryInputObjectSchema } from "./GameCreateWithoutCategoryInput.schema";
import { GameUncheckedCreateWithoutCategoryInputObjectSchema } from "./GameUncheckedCreateWithoutCategoryInput.schema";
import { GameCreateOrConnectWithoutCategoryInputObjectSchema } from "./GameCreateOrConnectWithoutCategoryInput.schema";
import { GameCreateManyCategoryInputEnvelopeObjectSchema } from "./GameCreateManyCategoryInputEnvelope.schema";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameUncheckedCreateNestedManyWithoutCategoryInput> =
  z
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
      createMany: z
        .lazy(() => GameCreateManyCategoryInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => GameWhereUniqueInputObjectSchema),
          z.lazy(() => GameWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const GameUncheckedCreateNestedManyWithoutCategoryInputObjectSchema =
  Schema;
