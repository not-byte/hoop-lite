enum Category {
    NOT_SELECTED,
    AMATEUR,
    PRO
}

enum Stage {
    START,
    TEAM,
    PLAYERS,
    SUMMARY,
    SENT
}

type Player = {
    first_name: string;
    last_name: string;
    age: number;
};

type Data = {
    name: string;
    category?: Category | undefined;
    email: string;
    phone: number;
    players: Partial<Player>[];
    accepted: boolean;
};

type InputType = "checkbox" | "email" | "number" | "tel" | "text";

type Link = {
    href: string;
    type: string;
    rel: string;
    sizes?: string;
    media?: string;
};

type FormPost = {
    status: 400 | 202;
};
