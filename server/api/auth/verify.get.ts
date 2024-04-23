export default defineEventHandler(async (event) => {
  const token = event.headers.get("authorization");

  return {
    authorized: token === "123",
  };
});