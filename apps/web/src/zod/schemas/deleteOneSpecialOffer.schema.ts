import { z } from "zod";
import { SpecialOfferWhereUniqueInputObjectSchema } from "./objects/SpecialOfferWhereUniqueInput.schema";

export const SpecialOfferDeleteOneSchema = z.object({
  where: SpecialOfferWhereUniqueInputObjectSchema,
});
