export default defineNuxtRouteMiddleware((to, from) => {
  const user: { status: boolean } = {
    status: useCookie<boolean>("auth").value
  };

  //TODO AUTHENTICATION

  if (!user.status) return navigateTo("/auth/login");
})