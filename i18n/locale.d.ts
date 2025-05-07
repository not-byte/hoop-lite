type Page<Content extends { [key: string]: unknown }> = {
    title: string;
    description: string;
    content: Content;
};

type Locale = {
    nuxtSiteConfig: {
        name: string;
        description: string;
    };
    pages: Record<Page>;
    components: {};
};
