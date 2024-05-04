type Payload = LoginPayload | RegisterPayload | ResetPayload | RecoveryPayload | VerifyPayload;
const regex: {
  [key: string]: RegExp;
} = {
  first_name: /^([a-zA-ZąćęłńóżźĄĆĘŁŃÓŻŹ]){3,32}$/,
  last_name: /^([a-zA-ZąćęłńóżźĄĆĘŁŃÓŻŹ]){3,32}$/,
  email: /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/,
  password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
  repeated_password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,32}$/,
  token: /^([a-zA-Z0-9!#$%^&*_]){8}$/
};
export default ((data: Payload) => Object.keys(data).every(key => regex[key] ? regex[key].test((data as any)[key]) : false));