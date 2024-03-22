import { useParamPath } from "~/composables/paramPath";

export default defineNuxtRouteMiddleware(() => {
  const route = useRoute();
  const user: { status: boolean } = {
    status: useCookie<boolean>("auth").value,
  };

  if (!user.status) return navigateTo(useParamPath() + "/auth/login");
});
