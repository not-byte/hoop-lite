export default () => {
  useCookie("auth", { sameSite: true }).value = null;

  return navigateTo("./auth/login");
};
