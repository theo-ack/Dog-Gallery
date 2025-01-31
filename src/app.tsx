import { useState } from "react";
import { BreedSelector } from "./components/BreedSelector";
import { ImageWithFrame } from "./components/ImageWithFrame";
import { ShuffleButton } from "./components/ShuffleButton";

export function App() {
  const [selectedBreed, setSelectdBreed] = useState<string>("");

  function onHandleOption(event: React.ChangeEvent<HTMLSelectElement>) {
    const breed = event.target.value;
    setSelectdBreed(breed);
    console.log(breed);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-14 bg-zinc-500">
      <BreedSelector
        selectedBreed={selectedBreed}
        onHandleOption={onHandleOption}
      />
      <ImageWithFrame selectedBreed={selectedBreed} />
      <ShuffleButton />
    </div>
  );
}
