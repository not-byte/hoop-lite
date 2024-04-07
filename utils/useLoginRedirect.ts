export default async (data: LoginPayload) => {
  if (!useValidate(data)) return;

  const response = await $fetch("/api/auth/login", {
    method: "POST",
    body: data,
  });

  if (!response.token) return;

  const expires: Date = new Date(new Date().getTime() + 1000 * 3600 * 24 * 30);

  useCookie<string>("token", { sameSite: true, expires: expires }).value = response.token;

  return navigateTo("/dashboard");
};
