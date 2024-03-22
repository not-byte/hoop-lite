import type { LoginPayload } from "~/types";
import { useParamPath } from "~/composables/paramPath";

export default (data: LoginPayload) => {
  if (data.email !== "info@botprzemek.pl" || data.password !== "Test123") return;

  useCookie<boolean>("auth", { sameSite: true }).value = true;

  return navigateTo(useParamPath() + "/dashboard");
};
