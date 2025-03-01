import { z } from "zod";

export const GameScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "coverImage",
  "rating",
  "categoryId",
  "releaseDate",
  "publisher",
  "price",
  "discount",
  "createdAt",
  "updatedAt",
  "specialOfferId",
]);
