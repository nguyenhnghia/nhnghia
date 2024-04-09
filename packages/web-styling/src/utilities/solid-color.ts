import type { ColorTheme } from "../theme/colors";
import { colorThemeValue } from "../theme/colors";

type Palette = keyof ColorTheme;
type PaletteShade = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950";
export default function getSolidColor(palette: Palette, shade: PaletteShade, opacity = 1): string {
  let accent = opacity;
  if (opacity > 1) accent = 1;
  if (opacity < 0) accent = 0;
  return `rgba(${colorThemeValue[palette][shade]} / ${accent})`;
}
