import slug from "slugify";

export default function slugify(...input: string[]): string {
  return slug(input.join("-"), {
    locale: "en",
    lower: true,
    replacement: "-",
    trim: true,
    strict: true,
  });
}
