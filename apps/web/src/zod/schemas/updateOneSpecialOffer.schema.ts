import { z } from "zod";
import { SpecialOfferUpdateInputObjectSchema } from "./objects/SpecialOfferUpdateInput.schema";
import { SpecialOfferUncheckedUpdateInputObjectSchema } from "./objects/SpecialOfferUncheckedUpdateInput.schema";
import { SpecialOfferWhereUniqueInputObjectSchema } from "./objects/SpecialOfferWhereUniqueInput.schema";

export const SpecialOfferUpdateOneSchema = z.object({
  data: z.union([
    SpecialOfferUpdateInputObjectSchema,
    SpecialOfferUncheckedUpdateInputObjectSchema,
  ]),
  where: SpecialOfferWhereUniqueInputObjectSchema,
});
