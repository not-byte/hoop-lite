export default defineEventHandler(async (event) => {
  const { first_name, last_name, email, password }: RegisterPayload = await readBody(event);

  return sendRedirect(event, "/auth/login", 302);
});
