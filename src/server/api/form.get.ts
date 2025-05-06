export default defineEventHandler(async (): Promise<Payload[]> => {
    return (await useStorage().getItem<Payload[]>("teams")) || [];
});
