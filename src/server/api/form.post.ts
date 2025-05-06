export default defineEventHandler(async (event): Promise<void> => {
    const team = await readBody(event);

    if (!team) {
        return setResponseStatus(event, 401);
    }

    const teams = (await useStorage().getItem<Payload[]>("teams")) || [];

    teams.push(team);

    await useStorage().setItem(`teams`, teams);

    console.log(await useStorage().getItem("teams"));

    return setResponseStatus(event, 202);
});
