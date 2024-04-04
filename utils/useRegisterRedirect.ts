export default async (data: LoginPayload) => {
  const regex: { [key: string]: RegExp } = {
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/,
    // password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  };

  const valid = Object.keys(regex).every((key) => regex[key].test((data as any)[key]));

  if (!valid) return;

  const response = await $fetch("/api/auth/register", {
    method: "POST",
    body: data,
  });

  if (!response) return;
};
