export default () => (useRouter().currentRoute.value.name as string).split("___")[0].replace("-", ".child.") || "index";
