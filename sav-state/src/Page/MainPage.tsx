import SavState from '../Components/saveState';
import MovieList from '../Components/MovieList';
import { useState } from 'react';

type movie = {
  show: {
    id: number;
    image: {
      medium: string;
    };
  };
};
const MainPage = () => {
  const [movieList, setMovieList] = useState<movie[]>(null);
  return (
    <>
      <SavState setMovieList={setMovieList} />
      <MovieList movieList={movieList} setMovieList={setMovieList} />
    </>
  );
};

export default MainPage;
