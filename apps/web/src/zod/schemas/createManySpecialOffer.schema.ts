import { z } from "zod";
import { SpecialOfferCreateManyInputObjectSchema } from "./objects/SpecialOfferCreateManyInput.schema";

export const SpecialOfferCreateManySchema = z.object({
  data: z.union([
    SpecialOfferCreateManyInputObjectSchema,
    z.array(SpecialOfferCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
});
