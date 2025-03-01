import { z } from "zod";
import { SpecialOfferWhereInputObjectSchema } from "./objects/SpecialOfferWhereInput.schema";

export const SpecialOfferDeleteManySchema = z.object({
  where: SpecialOfferWhereInputObjectSchema.optional(),
});
