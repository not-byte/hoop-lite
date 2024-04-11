export default async (data: PasswordPayload) => {

  if (!useValidate(data)) return;

  const response = await $fetch.raw("/api/auth/password", {
    method: "POST",
    body: data,
  });

  navigateTo("/auth/login");
}
