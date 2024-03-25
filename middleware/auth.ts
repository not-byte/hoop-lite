export default defineNuxtRouteMiddleware(() => {
  const user: { status: boolean } = {
    status: useCookie<boolean>("auth").value,
  };

  if (!user.status) return navigateTo("/auth/login");
});
