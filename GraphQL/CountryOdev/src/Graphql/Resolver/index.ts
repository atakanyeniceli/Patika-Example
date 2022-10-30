import { resolverCountries } from "./Countries/index.js";
import { resolverCountry } from "./Country/index.js";


export const resolvers = {
    Query: {
        countries: resolverCountries,
        country: resolverCountry
    }
}