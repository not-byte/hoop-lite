export default defineEventHandler(async (event) => {
  const token = event.headers.get("authorization");

  if (!token) return sendRedirect(event, "/auth/login", 302);

  if (token !== useRuntimeConfig(event).token) return sendRedirect(event, "/auth/login", 302);

  return setResponseStatus(event, 202);
});
