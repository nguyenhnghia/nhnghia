import registerButton from "@repo/component-registers/button-register";

export const ButtonA = registerButton(["Body", "Icon", "Text"], {
  __override: { Root: { width: "300px", border: "1px solid currentcolor" } },
});
