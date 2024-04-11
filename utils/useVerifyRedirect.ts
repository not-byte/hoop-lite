export default async (token: string | string[]): Promise<boolean> => {
  const { data: response } = await useFetch("/api/auth/verify", {
    headers: {
      authorization: token as string,
    },
  });

  return response.value ? response.value.authorized : false
};
