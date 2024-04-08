export default (data: LoginPayload | RegisterPayload) => {
  const regex: { [key: string]: RegExp } = {
    email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
  };

  return Object.keys(data).every((key) => regex[key] ? regex[key].test((data as any)[key]) : false);
}