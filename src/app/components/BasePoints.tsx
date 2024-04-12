export const PokemonBasePoints = ({ basePoints }: { basePoints: number[] }) => {
    return (
      <div className="base-points-container flex">
        {basePoints.map((point, index) => (
          <div key={index} className="base-point mx-4">
            <div className="base-point-label text-xs">Estadística {index}</div>
            <div className="base-point-bar h-20 w-4 bg-gray-200 rounded-lg overflow-hidden relative flex flex-col justify-end">
              {[...Array(point)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-2 bg-blue-500"
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  