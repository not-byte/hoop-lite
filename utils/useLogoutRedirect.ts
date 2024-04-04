export default () => {
  useCookie("token", { sameSite: true }).value = null;

  return navigateTo("/auth/login");
};
