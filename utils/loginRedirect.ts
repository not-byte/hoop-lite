export default ({ email, password }: LoginPayload) => {
  if (email !== "info@botprzemek.pl" || password !== "Test123") return;

  useCookie<boolean>("auth", { sameSite: true }).value = true;

  return navigateTo("/dashboard");
};
