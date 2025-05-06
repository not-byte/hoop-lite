const types = {
    age: "number",
    email: "email"
};

export default (key: unknown) => types[key as keyof Object] || "text";
