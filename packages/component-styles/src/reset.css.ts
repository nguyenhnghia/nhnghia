import { globalStyle } from "@vanilla-extract/css";

const DEFAULT_FONT_FAMILY =
  'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';

const MONO_FONT_FAMILY =
  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

globalStyle("*, ::before, ::after", {
  boxSizing: "border-box",
  border: "1px solid transparent",
});

globalStyle(":focus-visible", {
  outlineWidth: 2,
  outlineStyle: "solid",
  outlineOffset: 4,
});

globalStyle("html, :host", {
  lineHeight: 1.5,
  tabSize: 4,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFeatureSettings: "normal",
  fontVariationSettings: "normal",
  WebkitTapHighlightColor: "transparent",
});

globalStyle("body", {
  margin: 0,
  lineHeight: "inherit",
});

globalStyle("hr", {
  height: 0,
  color: "inherit",
  borderTopWidth: 1,
});

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/
globalStyle("abbr:where([title])", {
  textDecoration: "underline dotted",
});

/*
Remove the default font size and weight for headings.
*/
globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/
globalStyle("a", {
  color: "inherit",
  textDecoration: "inherit",
});

/*
Add the correct font weight in Edge and Safari.
*/
globalStyle("b, strong", {
  fontWeight: "bolder",
});

/*
1. Use the user's configured `mono` font-family by default.
2. Use the user's configured `mono` font-feature-settings by default.
3. Use the user's configured `mono` font-variation-settings by default.
4. Correct the odd `em` font sizing in all browsers.
*/
globalStyle("code, kbd, samp, pre", {
  fontFamily: MONO_FONT_FAMILY,
  fontFeatureSettings: "normal",
  fontVariationSettings: "normal",
  fontSize: "1em",
});

/*
Add the correct font size in all browsers.
*/
globalStyle("small", {
  fontSize: "80%",
});

/*
Prevent `sub` and `sup` elements from affecting the line height in all browsers.
*/
globalStyle("sub, sup", {
  fontSize: "75%",
  lineHeight: 0,
  position: "relative",
  verticalAlign: "baseline",
});

globalStyle("sub", {
  bottom: "-0.25em",
});

globalStyle("sup", {
  top: "-0.5em",
});

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/
globalStyle("table", {
  textIndent: 0,
  borderColor: "inherit",
  borderCollapse: "collapse",
});

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/
globalStyle("button, input, optgroup, select, textarea", {
  fontFamily: "inherit",
  fontFeatureSettings: "inherit",
  fontVariationSettings: "inherit",
  fontSize: "100%",
  fontWeight: "inherit",
  lineHeight: "inherit",
  color: "inherit",
  margin: 0,
  padding: 0,
});

/*
Remove the inheritance of text transform in Edge and Firefox.
*/
globalStyle("button, select", {
  textTransform: "none",
});

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/
globalStyle("button, [type='button'], [type='reset'], [type='submit']", {
  WebkitAppearance: "button",
  backgroundColor: "transparent",
  backgroundImage: "none",
});

/*
Use the modern Firefox focus style for all focusable elements.
*/
globalStyle(":-moz-focusring", {
  outline: "auto",
});

/*
Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
globalStyle(":-moz-ui-invalid", {
  boxShadow: "none",
});

/*
Add the correct vertical alignment in Chrome and Firefox.
*/
globalStyle("progress", {
  verticalAlign: "baseline",
});

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/
globalStyle("::-webkit-inner-spin-button, ::-webkit-outer-spin-button", {
  height: "auto",
});

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
globalStyle("[type='search']", {
  WebkitAppearance: "textfield",
  outlineOffset: -2,
});

/*
Remove the inner padding in Chrome and Safari on macOS.
*/
globalStyle("::-webkit-search-decoration", {
  WebkitAppearance: "none",
});

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to `inherit` in Safari.
*/
globalStyle("::-webkit-file-upload-button", {
  WebkitAppearance: "button",
  font: "inherit",
});

/*
Add the correct display in Chrome and Safari.
*/
globalStyle("summary", {
  display: "list-item",
});

/*
Removes the default spacing and border for appropriate elements.
*/
globalStyle("blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre", {
  margin: 0,
});

globalStyle("fieldset", {
  margin: 0,
  padding: 0,
});

globalStyle("legend", {
  padding: 0,
});

globalStyle("ol, ul, menu", {
  listStyle: "none",
  margin: 0,
  padding: 0,
});

/*
Reset default styling for dialogs.
*/
globalStyle("dialog", {
  padding: 0,
});

/*
Prevent resizing textarea horizontally by default.
*/
globalStyle("textarea", {
  resize: "vertical",
});

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/
globalStyle("input::placeholder, textarea::placeholder", {
  opacity: 1,
  color: "#9ca3af",
});

/*
Set the default cursor for buttons.
*/
globalStyle('button, [role="button"]', {
  cursor: "pointer",
});

/*
Make sure disabled buttons don't get the pointer cursor.
*/
globalStyle(":disabled", {
  cursor: "not-allowed",
});

/*
1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/
globalStyle("img, svg, video, canvas, audio, iframe, embed, object", {
  display: "block",
  verticalAlign: "middle",
});

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
globalStyle("img, video", {
  maxWidth: "100%",
  height: "auto",
});

/* Make elements with the HTML hidden attribute stay hidden by default */
globalStyle("[hidden]", {
  display: "none",
});

/**
 * Make element inside svg inherit it's color
 */
globalStyle("svg *", {
  fill: "inherit",
  stroke: "inherit",
});
