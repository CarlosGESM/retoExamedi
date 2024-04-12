import React from "react";
import { PokeCard } from "./components/PokeCard";
import { PokeDetails } from "./components/PokeDetail";

export default function Home() {
  
  return (
    <div className="flex flex-col items-center m-10">
      <PokeCard/>
      <h1 className="mt-20">-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
      <h1 className="mb-20">-------------------------------------------------------------------------------------------------------------------------------------------------------------------------</h1>
      <PokeDetails id={2}/>
    </div>
  );
}
