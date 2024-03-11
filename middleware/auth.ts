export default defineNuxtRouteMiddleware((to, from) => {
  const user: { status: boolean } = {
    status: false
  };

  //TODO AUTHENTICATION

  if (!user.status) return navigateTo("/auth/login")
})