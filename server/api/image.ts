export default defineEventHandler(async (event): Promise<any> => {
  const url = "https://pokeapi.co/api/v2/pokemon/ditto";
  return (await fetch(url)).json();
})