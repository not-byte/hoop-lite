import { useParamPath } from "~/composables/paramPath";

export default () => {
  useCookie("auth", { sameSite: true }).value = null;

  return navigateTo(useParamPath() + "/auth/login");
};
