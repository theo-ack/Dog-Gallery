import { useQuery } from "@tanstack/react-query";
import { imgData } from "../types";
import { IMG_URL } from "../constants/breedURL";

export const useGetIMG = (selectedBreed: string) =>
  useQuery<imgData>({
    queryKey: ["img", selectedBreed],
    enabled: Boolean(selectedBreed),
    queryFn: async () => {
      const response = await fetch(IMG_URL.replace("<breed>", selectedBreed));
      const data = await response.json();
      return data.message as imgData;
    },
  });
