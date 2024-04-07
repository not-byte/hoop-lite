export default (key: string) => {
  const types = {
    email: "email",
    password: "password",
    repeated_password: "password",
  };

  return types[key as keyof Object] || "text";
};
