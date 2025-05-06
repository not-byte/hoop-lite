type Link = {
    href: string;
    type: string;
    rel: string;
    sizes?: string;
    media?: string;
};

export function useSiteData() {
    const config = useRuntimeConfig().public;
    const route = useRoute();
    const { t } = useI18n({ useScope: "global" });

    const page = (): string | undefined =>
        route.name?.toString().split("___")[0];

    const name = (): string => config.name;
    const url = (): string => config.url;

    const image = (): string => `/images/og-image.png`;

    const robots = (): string =>
        "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

    const description = (): string => t(`pages.${page()}.description`);
    const title = (): string => {
        const title = t(`pages.${page()}.title`);

        return title ? `${title} · ${name()}` : `${name()}`;
    };

    const link = (): Array<Link> => [
        {
            href: "/icons/favicon.ico",
            type: "image/x-icon",
            rel: "icon"
        },
        {
            href: "/icons/favicon-32x32.png",
            type: "image/png",
            sizes: "32x32",
            rel: "icon"
        },
        {
            href: "/icons/favicon-16x16.png",
            type: "image/png",
            sizes: "16x16",
            rel: "icon"
        },
        {
            href: "/icons/apple-touch-icon.png",
            type: "image/png",
            sizes: "180x180",
            rel: "apple-touch-icon"
        },
    ];

    return { description, image, link, name, robots, title, url };
}

export default useSiteData;
