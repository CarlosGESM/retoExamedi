export type PokemonInfo = {
    id: any,
    img: string,
    name: string,
    type: string[],
    description: string,
    height: string,
    weight: string,
    gender: string,
    categories: string[],
    ability: string,
    weaknesses: string[],
    basePoints: BasePoints,
}

export type BasePoints = {
    hp: number,
    ataque: number,
    defensa: number,
    ataqueEspecial: number,
    defensaEspecial: number,
    velocidad: number
}