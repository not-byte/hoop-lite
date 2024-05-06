export default defineNuxtRouteMiddleware((to, _) => {
    const { token } = to.query
    
    if (!token) return navigateTo("/auth/login");
})
