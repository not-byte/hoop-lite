export default defineEventHandler(async (event) => {
  const { email, password }: LoginPayload = await readBody(event);

  if (email !== "info@botprzemek.pl" || password !== "Test123#") return;

  return {
    token: useRuntimeConfig(event).token,
  };
});
