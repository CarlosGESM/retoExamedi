import { TypeCustom } from "./TypeCustom";

/* eslint-disable @next/next/no-img-element */
export function PokeDetails({id}:any){
    
    const basePoints = [80, 100, 120, 90, 110, 80];
    const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const desc = `Una rara semilla le fue plantada en el lomo al nacer.\nLa planta brota y crece con este Pokémon.`
    const altura:number = 85; 
    const peso:number = 69;
    const categ:string = "Semilla"
    const habil:string = "Espesura"

    return(
        <div className="flex flex-row w-1024 h-820 space-x-2">
            <div className="bg-white w-1/2 h-full p-3">
                <img className="bg-gray-100 h-421 w-421 rounded-lg"
                 src={urlImg} alt="" />
                 <div className="bg-gray-400 h-276 w-full mt-6 rounded-lg p-3">
                    <h1>Puntos Base</h1>

                 </div>
            </div>
            <div className="bg-wwhite w-1/2 h-full">
                <div className="p-3">
                    <p className="text-xl text-justify">{desc}</p>
                </div>
                <div className="flex flex-row p-2 mt-3 mb-6 space-x-5">
                    <h1 className="text-xl">Versiones: </h1>
                    <img className="w-8 h-8" src="../public/pokeball-blue.svg" alt="" />
                    <img className="w-8 h-8" src="../public/pokeball-rosa.png" alt="" />
                </div>
                <div className="flex flex-row bg-blue-400 h-276 w-full rounded-2xl p-5">
                    <div className="flex flex-col w-1/2 space-y-3">
                        <h1 className="text-xl text-white">Altura</h1>
                            <h5 className="text-lg ml-2 font-medium text-gray-600">{(altura/100).toFixed(1)} m</h5>
                        <h1 className="text-xl text-white">Peso</h1>
                            <h5 className="text-lg ml-2 font-medium text-gray-600">{(peso/10).toFixed(1)} kg</h5>
                        <h1 className="text-xl text-white">Sexo</h1>
                            <div className="flex flex-row space-x-4">
                                <div className="w-5 h-5 bg-gray-600"></div>
                                <div className="w-5 h-5 bg-gray-600"></div>
                            </div>                        
                    </div>
                    <div className="flex flex-col w-1/2 space-y-3">
                        <h1 className="text-xl text-white">Categoría</h1>
                            <h5 className="text-lg ml-2 font-medium text-gray-600">{categ}</h5>
                        <h1 className="text-xl text-white">Habilidad</h1>
                            <h5 className="text-lg ml-2 font-medium text-gray-600">{habil}</h5>
                    </div>
                </div>
                <div>
                    <div className="p-2 mt-4">
                        <h1 className="text-xl">Tipo</h1>
                        <div className="flex flex-row m-3 space-x-3">
                            <TypeCustom type={"Planta"}/>
                            <TypeCustom type={"Veneno"}/>
                        </div>
                        <h1 className="text-xl">Debilidad</h1>
                        <div className="flex space-x-3">
                            <TypeCustom type={"Fuego"}/>
                            <TypeCustom type={"Hielo"}/>
                            <TypeCustom type={"Volador"}/>
                            <TypeCustom type={"Psíquico"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}