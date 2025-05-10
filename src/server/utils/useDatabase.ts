import postgres from "postgres";

const { database } = useRuntimeConfig();

const sql = postgres(database);

export function useDatabase() {
    async function insert(data: Data): Promise<void> {
        await sql`
            INSERT INTO teams (data) VALUES (${JSON.stringify(data)})
        `;
    }

    async function get(): Promise<Data[]> {
        const response = await sql<{ data: string }[]>`
            SELECT data FROM teams
        `;

        return response.map((row) => row.data).map((data) => JSON.parse(data));
    }

    return {
        insert,
        get
    };
}
