import { useGetIMG } from "../service/imgService";

type imageWithFrameProps = {
  selectedBreed: string;
};

export function ImageWithFrame({ selectedBreed }: imageWithFrameProps) {
  const { data, error, isLoading } = useGetIMG(selectedBreed);

  if (isLoading) return <div>Is Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && (
        <img
          className="h-40 rounded-lg border-2 border-black shadow-md"
          src={data}
          alt=""
        />
      )}
    </div>
  );
}
