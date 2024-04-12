import { BasePoints } from "../../../types/types";

//Obtengo la data principal de un Pokemon mediante si ID.
export async function fetchPokemonById(id:number) {
    try {
        const  response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const jsonData = await response.json();
        if (response.ok){
            console.log("Flag FetchPokemonById: ",jsonData);
            return jsonData;
        } 
    }catch(e){
        console.log("Error al obtener el pokemon, Error: ", e);
    }
}

//Obtengo el(los) tipo(s) del Pokemon pero en español.
export async function fetchTypeNames(types: string[]) {
    try {
        const typeNames: string[] = [];

        for (const type of types) {
            const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
            const typeData = await response.json();
            typeNames.push(typeData.names.find((nameInfo: any) => nameInfo.language.name === 'es').name);
        }
        return typeNames;
    } catch (error) {
        console.error("Error al obtener los nombres de los tipos en español:", error);
        throw error;
    }
}

//Obtengo las debilidades del Pokemon 
export async function fetchWeaknesses(id: number) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await response.json();

        const types = pokemonData.types.map((type: any) => type.type.name);

        const typeRelationsResponse = await fetch('https://pokeapi.co/api/v2/type/');
        const typeRelationsData = await typeRelationsResponse.json();

        const weaknesses: string[] = [];
        typeRelationsData.results.forEach((result: any) => {
            const typeName = result.name;
            const typeData = typeRelationsData.results.find((type: any) => type.name === typeName);
            if (typeData && typeData.damage_relations && typeData.damage_relations.double_damage_from) {
                typeData.damage_relations.double_damage_from.forEach((weakness: any) => {
                    if (types.includes(weakness.name)) {
                        weaknesses.push(weakness.name);
                    }
                });
            }
        });
        console.log("Flag fetchWeaknesses", weaknesses)
        return weaknesses;
    } catch (error) {
        console.error("Error al obtener las debilidades del Pokémon:", error);
        throw error;
    }
}

//Obtengo la descripción del Pokemon en Español
export async function fetchDescription(id:number){
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const data = await response.json();
        const description = data.flavor_text_entries.find((entry:any) => entry.language.name === "es");
        console.log("Flag FectchDescription: ", description)
        return description ? description.flavor_text : "Descripción no disponible";
    } catch (error) {
        console.error("Error al obtener la descripción del Pokémon:", error);
        return "Descripción no disponible";
    }
}

//Obtengo el genero del Pokemon, según el resultado obtengo solo masculino/femenino, desconocido o ambos géneros
export async function fetchGender(id:number) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const speciesData = await response.json();

        const genderRate = speciesData.gender_rate;
        let gender: string;

        switch (genderRate) {
            case -1:
                gender = "Desconocido";
                break;
            case 0:
                gender = "Solo masculino";
                break;
            case 8:
                gender = "Solo femenino";
                break;
            default:
                gender = "Ambos géneros";
                break;
        }
        console.log("Flag genero: ", gender)
        return gender;
    } catch (error) {
        console.error("Error al obtener el género del Pokémon:", error);
        throw error;
    }
}

//Obtengo la(s) categoría(s) del Pokémon
export async function fetchCategories(id:number) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const speciesData = await response.json();

        const categories = speciesData.genera.map((categoria:any) => categoria.genus);

        const uniqueCategory:string[] = Array.from(new Set(categories));

        console.log("Flag uniqueCategory: ", uniqueCategory)
        return uniqueCategory;
    } catch (error) {
        console.error("Error al obtener las categorías del Pokémon:", error);
        throw error;
    }
}

//Obtengo la habilidad principal del Pokémon
export async function fetchAbility(id:number) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const speciesData = await response.json();

        let habilidadPrincipal: string | null = null;
        if (speciesData.abilities) {
            speciesData.abilities.forEach((ability: any) => {
                if (!ability.is_hidden) {
                    habilidadPrincipal = ability.ability.name;
                }
            });
        }
        console.log("Flag habilidadPrincipal: ", habilidadPrincipal )
        return habilidadPrincipal || "N/A";
    } catch (error) {
        console.error("Error al obtener la habilidad principal del Pokémon:", error);
        throw error;
    }
}

//Obtengo los Puntos Base del Pokémon
export async function fetchBasePoints(id:number) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemonData = await response.json();

        const basePoints:BasePoints = {
            hp: pokemonData.stats[0].base_stat,
            ataque: pokemonData.stats[1].base_stat,
            defensa: pokemonData.stats[2].base_stat,
            ataqueEspecial: pokemonData.stats[3].base_stat,
            defensaEspecial: pokemonData.stats[4].base_stat,
            velocidad: pokemonData.stats[5].base_stat
        };
        console.log("Flag basePoints: ", basePoints)
        return basePoints;
    } catch (error) {
        console.error("Error al obtener los puntos base del Pokémon:", error);
        throw error;
    }
}