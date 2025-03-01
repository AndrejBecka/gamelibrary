import { z } from "zod";
import { SpecialOfferOrderByWithRelationInputObjectSchema } from "./objects/SpecialOfferOrderByWithRelationInput.schema";
import { SpecialOfferWhereInputObjectSchema } from "./objects/SpecialOfferWhereInput.schema";
import { SpecialOfferWhereUniqueInputObjectSchema } from "./objects/SpecialOfferWhereUniqueInput.schema";
import { SpecialOfferCountAggregateInputObjectSchema } from "./objects/SpecialOfferCountAggregateInput.schema";
import { SpecialOfferMinAggregateInputObjectSchema } from "./objects/SpecialOfferMinAggregateInput.schema";
import { SpecialOfferMaxAggregateInputObjectSchema } from "./objects/SpecialOfferMaxAggregateInput.schema";

export const SpecialOfferAggregateSchema = z.object({
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
  _count: z
    .union([z.literal(true), SpecialOfferCountAggregateInputObjectSchema])
    .optional(),
  _min: SpecialOfferMinAggregateInputObjectSchema.optional(),
  _max: SpecialOfferMaxAggregateInputObjectSchema.optional(),
});
