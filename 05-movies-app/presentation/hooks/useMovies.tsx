import { nowPlayingAction } from "@/core/actions/movies";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlatingQuery = useQuery({
    queryKey: ["moving", "now-playing"],
    queryFn: nowPlayingAction,
    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    // methods
    nowPlatingQuery,

    //properties
  };
};
