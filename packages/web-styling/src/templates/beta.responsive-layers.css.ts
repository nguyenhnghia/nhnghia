import { globalLayer } from "@vanilla-extract/css";
import {
  DESKTOP_LAYER_NAME,
  MOBILE_LAYER_NAME,
  TABLET_LAYER_NAME,
} from "../constants/layers";

export const MOBILE_LAYER = globalLayer(MOBILE_LAYER_NAME);
export const TABLET_LAYER = globalLayer(TABLET_LAYER_NAME);
export const DESKTOP_LAYER = globalLayer(DESKTOP_LAYER_NAME);
