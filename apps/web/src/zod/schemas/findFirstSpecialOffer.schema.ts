import { z } from "zod";
import { SpecialOfferOrderByWithRelationInputObjectSchema } from "./objects/SpecialOfferOrderByWithRelationInput.schema";
import { SpecialOfferWhereInputObjectSchema } from "./objects/SpecialOfferWhereInput.schema";
import { SpecialOfferWhereUniqueInputObjectSchema } from "./objects/SpecialOfferWhereUniqueInput.schema";
import { SpecialOfferScalarFieldEnumSchema } from "./enums/SpecialOfferScalarFieldEnum.schema";

export const SpecialOfferFindFirstSchema = z.object({
  orderBy: z
    .union([
      SpecialOfferOrderByWithRelationInputObjectSchema,
      SpecialOfferOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: SpecialOfferWhereInputObjectSchema.optional(),
  cursor: SpecialOfferWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SpecialOfferScalarFieldEnumSchema).optional(),
});
