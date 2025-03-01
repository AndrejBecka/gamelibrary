import { z } from "zod";

export const SpecialOfferScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "coverImage",
  "createdAt",
  "updatedAt",
]);
