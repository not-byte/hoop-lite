const types = {
  email: "email",
  password: "password",
  repeated_password: "password",
};

export default (key: string) => types[key as keyof Object] || "text";
