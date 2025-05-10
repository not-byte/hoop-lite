export default defineNuxtRouteMiddleware((_, { query: { token } }) => {
    if (!import.meta.server) {
        return;
    }

    if (token === useRuntimeConfig().token) {
        return;
    }

    return navigateTo("/", { redirectCode: 301 });
});
