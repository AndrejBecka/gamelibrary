import { z } from "zod";
import { SpecialOfferWhereUniqueInputObjectSchema } from "./objects/SpecialOfferWhereUniqueInput.schema";
import { SpecialOfferCreateInputObjectSchema } from "./objects/SpecialOfferCreateInput.schema";
import { SpecialOfferUncheckedCreateInputObjectSchema } from "./objects/SpecialOfferUncheckedCreateInput.schema";
import { SpecialOfferUpdateInputObjectSchema } from "./objects/SpecialOfferUpdateInput.schema";
import { SpecialOfferUncheckedUpdateInputObjectSchema } from "./objects/SpecialOfferUncheckedUpdateInput.schema";

export const SpecialOfferUpsertSchema = z.object({
  where: SpecialOfferWhereUniqueInputObjectSchema,
  create: z.union([
    SpecialOfferCreateInputObjectSchema,
    SpecialOfferUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    SpecialOfferUpdateInputObjectSchema,
    SpecialOfferUncheckedUpdateInputObjectSchema,
  ]),
});
