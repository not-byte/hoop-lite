type Component = Record<string, string | Component>;

type Page = {
    title: string;
    description: string;
    content?: Component;
};

type Pages = Record<
    "404" | "500" | "index" | "admin" | "about" | "regulations" | "bracket",
    Page
>;

type Locale = {
    nuxtSiteConfig: {
        name: string;
        description: string;
    };
    components: Component;
    pages: Pages;
    requirements: Component;
};
