import { queryCountries } from '../Query/Countries/index.js'
import { queryCountry } from '../Query/Country/index.js'
import { typeCountry } from './Country/index.js'



export const typeDefs = ` #graphql

    ${typeCountry}
    ${queryCountries}
    ${queryCountry}

`