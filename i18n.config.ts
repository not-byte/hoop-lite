const types = {
  age: "number",
  email: "email",
  password: "password",
  repeated_password: "password"
};
export default ((key: unknown) => types[(key as keyof Object)] || "text");