import { readFileSync } from "fs";
const countriesJson = readFileSync('../country.json', 'utf-8');
export const countries = JSON.parse(countriesJson);
