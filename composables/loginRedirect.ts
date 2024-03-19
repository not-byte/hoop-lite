export default (data: any) => {
  if (data.email !== "info@botprzemek.pl" || data.password !== "Test123") return

  useCookie<boolean>("auth", { sameSite: true }).value = true;

  return navigateTo("/");
}