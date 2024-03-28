import { globalStyle } from "@vanilla-extract/css";
import { DESKTOP_LAYER_NAME, MOBILE_LAYER_NAME, RESET_LAYER_NAME, TABLET_LAYER_NAME } from "../configurations";

const DEFAULT_FONT_FAMILY = 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

const MONO_FONT_FAMILY = 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

globalStyle("html", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      background: "'??'", // This rule is set in order to properly define the order of layers.
    },
    [MOBILE_LAYER_NAME]: {
      background: "'??'", // This rule is set in order to properly define the order of layers.
    },
    [TABLET_LAYER_NAME]: {
      background: "'??'", // This rule is set in order to properly define the order of layers.
    },
    [DESKTOP_LAYER_NAME]: {
      background: "'??'", // This rule is set in order to properly define the order of layers.
    },
  },
});

globalStyle("*, ::before, ::after", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      boxSizing: "border-box",
      transitionDuration: "0.33s",
      transitionProperty: "none",
      transitionTimingFunction: "ease-in-out",
    },
  },
});

globalStyle(":focus-visible", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      outlineOffset: 4,
      outlineStyle: "solid",
      outlineWidth: 2,
    },
  },
});

globalStyle("html, :host", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      fontFamily: DEFAULT_FONT_FAMILY,
      fontFeatureSettings: "normal",
      fontVariationSettings: "normal",
      lineHeight: 1.5,
      tabSize: 4,
      WebkitTapHighlightColor: "transparent",
    },
  },
});

globalStyle("body", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      lineHeight: "inherit",
      margin: 0,
    },
  },
});

globalStyle("hr", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      borderTopWidth: 1,
      color: "inherit",
      height: 0,
    },
  },
});

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/
globalStyle("abbr:where([title])", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      textDecoration: "underline dotted",
    },
  },
});

/*
Remove the default font size and weight for headings.
*/
globalStyle("h1, h2, h3, h4, h5, h6", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      fontSize: "inherit",
      fontWeight: "inherit",
    },
  },
});

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/
globalStyle("a", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      color: "inherit",
      textDecoration: "inherit",
    },
  },
});

/*
Add the correct font weight in Edge and Safari.
*/
globalStyle("b, strong", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      fontWeight: "bolder",
    },
  },
});

/*
1. Use the user's configured `mono` font-family by default.
2. Use the user's configured `mono` font-feature-settings by default.
3. Use the user's configured `mono` font-variation-settings by default.
4. Correct the odd `em` font sizing in all browsers.
*/
globalStyle("code, kbd, samp, pre", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      fontFamily: MONO_FONT_FAMILY,
      fontFeatureSettings: "normal",
      fontSize: "1em",
      fontVariationSettings: "normal",
    },
  },
});

/*
Add the correct font size in all browsers.
*/
globalStyle("small", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      fontSize: "80%",
    },
  },
});

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/
globalStyle("sub, sup", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      fontSize: "75%",
      lineHeight: 0,
      position: "relative",
      verticalAlign: "baseline",
    },
  },
});

globalStyle("sub", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      bottom: "-0.25em",
    },
  },
});

globalStyle("sup", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      top: "-0.5em",
    },
  },
});

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/
globalStyle("table", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      borderCollapse: "collapse",
      borderColor: "inherit",
      textIndent: 0,
    },
  },
});

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/
globalStyle("button, input, optgroup, select, textarea", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      color: "inherit",
      fontFamily: "inherit",
      fontFeatureSettings: "inherit",
      fontSize: "100%",
      fontVariationSettings: "inherit",
      fontWeight: "inherit",
      lineHeight: "inherit",
      margin: 0,
      padding: 0,
    },
  },
});

/*
Remove the inheritance of text transform in Edge and Firefox.
*/
globalStyle("button, select", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      textTransform: "none",
    },
  },
});

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/
globalStyle("button, [type='button'], [type='reset'], [type='submit']", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      backgroundColor: "transparent",
      backgroundImage: "none",
      appearance: "button",
      WebkitAppearance: "button",
    },
  },
});

/*
Use the modern Firefox focus style for all focusable elements.
*/
globalStyle(":-moz-focusring", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      outline: "auto",
    },
  },
});

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
globalStyle(":-moz-ui-invalid", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      boxShadow: "none",
    },
  },
});

/*
Add the correct vertical alignment in Chrome and Firefox.
*/
globalStyle("progress", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      verticalAlign: "baseline",
    },
  },
});

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/
globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      height: "auto",
    },
  },
});

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
globalStyle("[type='search']", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      outlineOffset: -2,
      appearance: "textfield",
      WebkitAppearance: "textfield",
    },
  },
});

/*
Remove the inner padding in Chrome and Safari on macOS.
*/
globalStyle("::-webkit-search-decoration", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      appearance: "none",
      WebkitAppearance: "none",
    },
  },
});

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/
globalStyle("::-webkit-file-upload-button", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      font: "inherit",
      appearance: "button",
      WebkitAppearance: "button",
    },
  },
});

/*
Add the correct display in Chrome and Safari.
*/
globalStyle("summary", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      display: "list-item",
    },
  },
});

/*
Removes the default spacing and border for appropriate elements.
*/
globalStyle("blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      margin: 0,
    },
  },
});

globalStyle("fieldset", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      margin: 0,
      padding: 0,
    },
  },
});

globalStyle("legend", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      padding: 0,
    },
  },
});

globalStyle("ol, ul, menu", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      listStyle: "none",
      margin: 0,
      padding: 0,
    },
  },
});

/*
Reset default styling for dialogs.
*/
globalStyle("dialog", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      padding: 0,
    },
  },
});

/*
Prevent resizing textarea horizontally by default.
*/
globalStyle("textarea", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      resize: "vertical",
    },
  },
});

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/
globalStyle("input::placeholder, textarea::placeholder", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      color: "#9ca3af",
      opacity: 1,
    },
  },
});

/*
Set the default cursor for buttons.
*/
globalStyle('button, [role="button"]', {
  "@layer": {
    [RESET_LAYER_NAME]: {
      cursor: "pointer",
    },
  },
});

/*
Make sure disabled buttons don't get the pointer cursor.
*/
globalStyle(":disabled", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      cursor: "not-allowed",
    },
  },
});

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/
globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      display: "block",
    },
  },
});

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
globalStyle("img, video", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      height: "auto",
      maxWidth: "100%",
    },
  },
});

/* Make elements with the HTML hidden attribute stay hidden by default */
globalStyle("[hidden]", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      display: "none",
    },
  },
});
/**
 * Make element inside svg inherit it's color
 */
globalStyle("svg *", {
  "@layer": {
    [RESET_LAYER_NAME]: {
      fill: "inherit",
      stroke: "inherit",
    },
  },
});
