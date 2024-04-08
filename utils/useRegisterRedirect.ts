export default async (data: RegisterPayload) => {
  if (!useValidate(data)) return;

  const response = await $fetch("/api/auth/register", {
    method: "POST",
    body: data,
  });

  if (!response) return;

  return navigateTo("/auth/login");
};