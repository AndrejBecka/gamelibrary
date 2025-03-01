import { z } from "zod";
import { SpecialOfferWhereInputObjectSchema } from "./objects/SpecialOfferWhereInput.schema";
import { SpecialOfferOrderByWithAggregationInputObjectSchema } from "./objects/SpecialOfferOrderByWithAggregationInput.schema";
import { SpecialOfferScalarWhereWithAggregatesInputObjectSchema } from "./objects/SpecialOfferScalarWhereWithAggregatesInput.schema";
import { SpecialOfferScalarFieldEnumSchema } from "./enums/SpecialOfferScalarFieldEnum.schema";

export const SpecialOfferGroupBySchema = z.object({
  where: SpecialOfferWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      SpecialOfferOrderByWithAggregationInputObjectSchema,
      SpecialOfferOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: SpecialOfferScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SpecialOfferScalarFieldEnumSchema),
});
