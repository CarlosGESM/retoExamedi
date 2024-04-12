export function TypeCustom({type}:any){
    
    switch(type){
        case "Planta":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-planta rounded-md'>
                    <span className=''>Planta</span>
                </div>
            )
        case "Veneno":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-veneno rounded-md'>
                    <span className='text-white'>Veneno</span>
                </div>
            )
        case "Fuego":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-fuego rounded-md'>
                    <span className='text-white'>Fuego</span>
                </div>
            )
        case "Volador":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-gradient-to-b from-blue-200 to-gray-300 rounded-md p-1'>
                    <span className='text-white'>Volador</span>
                </div>
            )
        case "Agua":
            return (
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-agua rounded-md'>
                    <span className='text-white'>Agua</span>
                </div>
            )
        case "Bicho":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-bicho rounded-md p-1'>
                    <span className='text-white'>Bicho</span>
                </div>
            )
        case "Dragón":
            return (
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-gradient-to-b from-blue-400 to-red-500 rounded-md p-1'>
                    <span className='text-white'>Dragón</span>
                </div>
            )
        case "Hada":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-hada rounded-md p-1'>
                    <span className='text-white'>Hada</span>
                </div>
            )
        case "Fantasma":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-fantasma rounded-md p-1'>
                    <span className='text-white'>Fantasma</span>
                </div>
            )
        case "Tierra":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-gradient-to-b from-yellow-400 to-yellow-950 rounded-md p-1'>
                    <span className='text-white'>Tierra</span>
                </div>
            )
        case "Normal":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-normal rounded-md p-1'>
                    <span className='text-white'>Normal</span>
                </div>
            )
        case "Psíquico":
            return (
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-pink-500 rounded-md p-1'>
                    <span className='text-white'>Psíquico</span>
                </div>
            )
        case "Acero":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-acero rounded-md p-1'>
                    <span className='text-white'>Acero</span>
                </div>
            )
        case "Siniestro":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-siniestro rounded-md p-1'>
                    <span className='text-white'>Siniestro</span>
                </div>
            )
        case "Eléctrico":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-electrico rounded-md p-1'>
                    <span className='text-white'>Eléctrico</span>
                </div>
            )
        case "Lucha":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-lucha rounded-md p-1'>
                    <span className='text-white'>Lucha</span>
                </div>
            )
        case "Hielo":
            return(
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-hielo rounded-md p-1'>
                    <span className='text-white'>Hielo</span>
                </div>
            )
        case "Roca":
            return (
                <div className='w-1/2 h-8 flex justify-center place-items-center bg-roca rounded-md p-1'>
                    <span className='text-white'>Roca</span>
                </div>
            )
    }
}