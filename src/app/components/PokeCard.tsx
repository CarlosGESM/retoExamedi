/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client"
import { useEffect, useState } from 'react';
import { fetchWeaknesses, fetchAbility, fetchCategories, fetchDescription, fetchGender, fetchPokemonById, fetchBasePoints, fetchTypeNames } from '../lib/fetchData';
import { PokemonInfo } from '../../../types/types';
import { TypeCustom } from './TypeCustom';

export function PokeCard() {
    const [pokemonList, setPokemonList] = useState<PokemonInfo[]>([]);
    const [pokemonRange, setPokemonRange] = useState<{ start: number, end: number }>({ start: 1, end: 0 });
    const [initialLoaded, setInitialLoaded] = useState(true);

    const cambioMayus = (name: string): string => {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    useEffect(() => {
        if(!initialLoaded)obtenerPokemon(1,2)
        else{
    }
    }, [setInitialLoaded]);

    const cargarMasPokemon = () => {
        const newStart = pokemonRange.end + 1;
        const newEnd = pokemonRange.end + 12;
        setPokemonRange({ start: newStart, end: newEnd });
        obtenerPokemon(newStart, newEnd);
    };
    

    const obtenerPokemon = async (start: number, end: number) => {
        try {
            const newPokemonList: PokemonInfo[] = [];
            for (let i = start; i <= end; i++) {
                const pokemonData = await fetchPokemonById(i);
                const tiposEnEspanol = await fetchTypeNames(pokemonData.types.map((type: any) => type.type.name));
    
                const pokemonInfo: PokemonInfo = {
                    id: i,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${i}.png`,
                    name: cambioMayus(pokemonData.name),
                    type: tiposEnEspanol,
                    description: await fetchDescription(i),
                    height: pokemonData.height,
                    weight: pokemonData.weight,
                    gender: await fetchGender(i),
                    categories: await fetchCategories(i),
                    ability: await fetchAbility(i),
                    weaknesses: await fetchWeaknesses(i),
                    basePoints: await fetchBasePoints(i)
                };
                newPokemonList.push(pokemonInfo);
            }
            setPokemonList((prevList) => [...prevList, ...newPokemonList]);
        } catch (error) {
            console.error("Error al obtener los datos del Pokémon:", error);
        }
    };

    
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-full flex justify-center'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 '>
                    {pokemonList.map((pokemon) => (
                        <div className=''
                        key={pokemon.id}>
                            <a href="">
                                <img className='bg-gray-100 rounded-md w-52'
                                    src={pokemon.img}
                                    alt={pokemon.id.toString()} />
                            </a>
                            <div>
                                <p className='mb-3 m-3 text-gray-300 font-extrabold'><span className='font-bold'>N.°&nbsp;</span>{pokemon.id.toString().padStart(4, '0')}</p>
                                <h5 className='ml-3 text-2xl'>{pokemon.name}</h5>
                                <div className='flex flex-row justify-between mt-2 space-x-3'>
                                    <TypeCustom type={pokemon.type[0]} />
                                    {pokemon.type[1] && <TypeCustom type={pokemon.type[1]} />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <button className='bg-blue-400 text-white py-2 px-4 rounded-md mt-20 w-72 self-center'
             onClick={cargarMasPokemon}>Cargar Pokémon</button>
        </div>
    );
};
