export default defineNuxtRouteMiddleware(() => {
  const route = useRoute();
  const path = route.fullPath.includes(route.params.tenancy as string) ? "" : route.params.tenancy;
  const user: { status: boolean } = {
    status: useCookie<boolean>("auth").value,
  };

  if (!user.status) return navigateTo(path + "/auth/login");
});
