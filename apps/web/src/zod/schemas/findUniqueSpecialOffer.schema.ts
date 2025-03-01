import { z } from "zod";
import { SpecialOfferWhereUniqueInputObjectSchema } from "./objects/SpecialOfferWhereUniqueInput.schema";

export const SpecialOfferFindUniqueSchema = z.object({
  where: SpecialOfferWhereUniqueInputObjectSchema,
});
