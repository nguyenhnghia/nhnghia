import registerButton from "@repo/component-registers/button-register";

const buttonABlueSprint = registerButton(["Icon", "Text"], {
  size: "huge",
  __responsive: {
    tablet: {
      size: "normal",
    },
    desktop: {
      size: "tiny",
    },
  },
});

export default buttonABlueSprint;
