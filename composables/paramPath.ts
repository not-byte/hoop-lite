export const useParamPath = (): string => {
  const route = useRoute();
  return route.fullPath.includes(route.params.tenancy as string) ? "" : (route.params.tenancy as string);
};
