export default defineEventHandler(async (): Promise<Data[]> => {
    return (await useStorage().getItem<Data[]>("teams")) || [];
});
