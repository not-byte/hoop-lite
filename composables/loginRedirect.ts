import type { LoginPayload } from "~/types";

export default (data: LoginPayload) => {
  if (data.email !== "info@botprzemek.pl" || data.password !== "Test123") return;

  useCookie<boolean>("auth", { sameSite: true }).value = true;

  return navigateTo("./../dashboard");
};
