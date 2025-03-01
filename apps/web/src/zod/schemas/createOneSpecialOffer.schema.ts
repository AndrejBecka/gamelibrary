import { z } from "zod";
import { SpecialOfferCreateInputObjectSchema } from "./objects/SpecialOfferCreateInput.schema";
import { SpecialOfferUncheckedCreateInputObjectSchema } from "./objects/SpecialOfferUncheckedCreateInput.schema";

export const SpecialOfferCreateOneSchema = z.object({
  data: z.union([
    SpecialOfferCreateInputObjectSchema,
    SpecialOfferUncheckedCreateInputObjectSchema,
  ]),
});
