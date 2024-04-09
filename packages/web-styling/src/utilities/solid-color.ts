import type { Palette, PaletteShade } from "../theme/colors";
import { colorThemeValue } from "../theme/colors";

export default function getSolidColor(palette: Palette, shade: PaletteShade, opacity = 1): string {
  let accent = opacity;
  if (opacity > 1) accent = 1;
  if (opacity < 0) accent = 0;
  return `rgba(${colorThemeValue[palette][shade]} / ${accent})`;
}
