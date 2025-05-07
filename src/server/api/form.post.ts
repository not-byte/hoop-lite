export default defineEventHandler(async (event): Promise<void> => {
    const team = await readBody(event);

    if (!team) {
        return setResponseStatus(event, 400);
    }

    const teams = (await useStorage().getItem<Data[]>("teams")) || [];

    teams.push(team);

    await useStorage().setItem(`teams`, teams);

    return setResponseStatus(event, 202);
});
