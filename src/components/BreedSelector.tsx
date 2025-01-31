import { useGetbreed } from "../service/breedService";

type BreedSelectorProps = {
  selectedBreed: string;
  onHandleOption: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function BreedSelector({
  selectedBreed,
  onHandleOption,
}: BreedSelectorProps) {
  const { data, error, isLoading } = useGetbreed();

  if (isLoading) return <div>Is Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <select
        className="w-28 rounded-sm border-2 border-black bg-blue-400 py-1 text-xs text-white shadow-md"
        name="breed"
        id="breed"
        value={selectedBreed}
        onChange={onHandleOption}
      >
        <option value="">-Select Breed-</option>
        {data &&
          Object.keys(data).map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
      </select>
    </div>
  );
}
