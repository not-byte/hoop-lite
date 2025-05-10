const { insert } = useDatabase();

export default defineEventHandler(async (event): Promise<FormPost> => {
    const data = await readBody(event);

    if (!data) {
        setResponseStatus(event, 400);

        return {
            status: 400
        };
    }

    await insert(data);

    setResponseStatus(event, 202);

    return {
        status: 202
    };
});
