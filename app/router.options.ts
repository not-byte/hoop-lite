import type { RouterOptions } from "@nuxt/schema";

export default <RouterOptions>{
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash) {
      const el = document.querySelector(to.hash) as HTMLElement;
      return { left: 0, top: (el?.offsetTop ?? 0) - 30, behavior: "smooth" };
    }

    if (to.fullPath === from.fullPath) return;
    return { left: 0, top: 0, behavior: "smooth" };
  },
};
