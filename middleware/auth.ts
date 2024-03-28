export default defineNuxtRouteMiddleware(async () => {
  const token = useCookie<string>("token").value;

  if (!token) return navigateTo("/auth/login");

  await $fetch.raw("/api/auth", {
    method: "GET",
    headers: {
      authorization: token,
    },
  });
});
