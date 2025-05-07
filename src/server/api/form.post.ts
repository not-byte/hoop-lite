export default defineEventHandler(async (event): Promise<FormPost> => {
    const team = await readBody(event);

    if (!team) {
        setResponseStatus(event, 400);

        return {
            status: 400
        };
    }

    const teams = (await useStorage().getItem<Data[]>("teams")) || [];

    teams.push(team);

    await useStorage().setItem(`teams`, teams);

    setResponseStatus(event, 202);

    return {
        status: 202
    };
});
