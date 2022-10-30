import { countries } from "../../../Data/country.js";


export const resolverCountry = (parent, args: { code: string }) => {
    return countries.find((country) => country.cca2 === args.code)
}