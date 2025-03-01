import { z } from "zod";
import { SpecialOfferUpdateManyMutationInputObjectSchema } from "./objects/SpecialOfferUpdateManyMutationInput.schema";
import { SpecialOfferWhereInputObjectSchema } from "./objects/SpecialOfferWhereInput.schema";

export const SpecialOfferUpdateManySchema = z.object({
  data: SpecialOfferUpdateManyMutationInputObjectSchema,
  where: SpecialOfferWhereInputObjectSchema.optional(),
});
