import { z } from "zod";
import { GameWhereUniqueInputObjectSchema } from "./GameWhereUniqueInput.schema";
import { GameCreateWithoutSpecialOfferInputObjectSchema } from "./GameCreateWithoutSpecialOfferInput.schema";
import { GameUncheckedCreateWithoutSpecialOfferInputObjectSchema } from "./GameUncheckedCreateWithoutSpecialOfferInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.GameCreateOrConnectWithoutSpecialOfferInput> = z
  .object({
    where: z.lazy(() => GameWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => GameCreateWithoutSpecialOfferInputObjectSchema),
      z.lazy(() => GameUncheckedCreateWithoutSpecialOfferInputObjectSchema),
    ]),
  })
  .strict();

export const GameCreateOrConnectWithoutSpecialOfferInputObjectSchema = Schema;
