export default function getScope(__dirname: string): string {
  return `app/${__dirname.split("/src/app/")[1]}`;
}
