import slug from "slugify";

export default function slugify(input: string): string {
  return slug(input, {
    locale: "vi",
    lower: true,
    replacement: "-",
    trim: true,
    strict: true,
  });
}
