import registerButton from "@repo/component-registers/button-register";

const ButtonA = registerButton(["Icon", "Text"], {
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

export default ButtonA;
