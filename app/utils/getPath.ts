export default () => (useRouter().currentRoute.value.name as string)
    .split("___")[0]
    .replaceAll("-", ".children.") || "index";
