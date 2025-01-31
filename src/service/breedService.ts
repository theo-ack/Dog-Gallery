import { useQuery } from "@tanstack/react-query";

import { BREED_URL } from "../constants/breedURL";
import { BreedData } from "../types";

export const useGetbreed = () =>
  useQuery<BreedData>({
    queryKey: ["breed"],
    queryFn: async () => {
      const response = await fetch(BREED_URL);
      const data = await response.json();
      return data.message as BreedData;
    },
  });
