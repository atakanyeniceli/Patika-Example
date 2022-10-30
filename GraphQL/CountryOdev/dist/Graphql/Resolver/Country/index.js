import { countries } from "../../../Data/country.js";
export const resolverCountry = (parent, args) => {
    return countries.find((country) => country.cca2 === args.code);
};
