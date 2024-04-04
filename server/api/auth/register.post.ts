export default defineEventHandler(async (event) => {
  const { firstName, lastName, email, password }: RegisterPayload = await readBody(event);

  return sendRedirect(event, "/auth/login", 302);
});
