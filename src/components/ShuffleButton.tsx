import { useQueryClient } from "@tanstack/react-query";

export function ShuffleButton() {
  const queryClient = useQueryClient();

  function handleButtonClick() {
    queryClient.invalidateQueries({ queryKey: ["img"] });
  }

  return (
    <button
      onClick={handleButtonClick}
      className="animate-pulse rounded-sm border-2 border-black bg-blue-400 px-6 text-white shadow-md"
    >
      Shuffle
    </button>
  );
}
