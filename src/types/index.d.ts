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

type Team = {
    name: string;
    category: Category;
    email: string;
    phone: number;
};

type Player = {
    first_name: string;
    last_name: string;
    age: number;
};

type Data = {
    team: Team;
    players: Player[];
    accepted: boolean;
};

type Errors<T> = T extends string | number | boolean
    ? boolean
    : T extends Array<infer U>
      ? Errors<U>[]
      : { [K in keyof T]: Errors<T[K]> };

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
