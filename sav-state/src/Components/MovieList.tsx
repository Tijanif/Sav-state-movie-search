import { useEffect } from 'react';
import { useHistory } from 'react-router';
import './MovieList.css';

type movie = {
  show: {
    id: number;
    image: {
      medium: string;
    };
  };
};

function MovieList({ movieList, setMovieList }) {
  const history = useHistory();
  console.log('list before chat', movieList);

  const currentDate = new Date().toISOString();
  const date = currentDate.split('T')[0];

  useEffect(() => {
    fetch(`https://api.tvmaze.com/schedule?country=GB&date=${date}`)
      .then((resp) => resp.json())
      .then((moviesFromServer) => setMovieList(moviesFromServer));
  }, []);

  const handleClick = (movieId) => {
    console.log(movieId);

    history.push(`/detail-page/${movieId}`);
  };
  return (
    <>
      {movieList ? (
        <ul className='Movie-List'>
          {movieList.map((movie: movie) => {
            return (
              <li
                className='Movie-li'
                key={movie.show.id}
                onClick={() => handleClick(movie.show.id)}
              >
                <img
                  src={movie.show.image && movie.show.image.medium}
                  alt='image'
                />
              </li>
            );
          })}
        </ul>
      ) : null}
    </>
  );
}

export default MovieList;
