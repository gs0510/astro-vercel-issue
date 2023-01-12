// import { Pokemon } from "../../types";
// import type { APIRoute } from "astro";

// export const get: APIRoute = async ({ params, request }) => {
//   const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
//   const pokemon = (await response.json()) as { results: Pokemon[] };

//   const req = request[Object.getOwnPropertySymbols(request)[1]];
//   const q = req.parsedURL.searchParams.get("q")?.toLowerCase() ?? "";

//   return new Response(
//     JSON.stringify(
//       pokemon.results.filter((p: Pokemon) => p.name.toLowerCase().includes(q))
//     ),
//     {
//       status: 200,
//     }
//   );
// };
