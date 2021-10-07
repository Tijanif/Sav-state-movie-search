import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import SeasonEpisodes from '../Components/SeasonEpisodes';

import './DetailsPage.css';

const DetailsPage = () => {
  let params: any = useParams();

  const [movieDetail, setMovieDetail] = useState(null);

  const [seasons, setSeasons] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${params.id}`)
      .then((resp) => resp.json())
      .then((movieFromServer) => setMovieDetail(movieFromServer));
    fetch(`https://api.tvmaze.com/shows/${params.id}/seasons`)
      .then((resp) => resp.json())
      .then((seasonsFromServer) => setSeasons(seasonsFromServer));
  }, []);

  return (
    <>
      <div className='container-two'>
        {movieDetail && seasons ? (
          <>
            {' '}
            <div>
              <div className='slug'>
                <img src={movieDetail.image.medium} alt={movieDetail.name} />
                <div>
                  <h1>
                    {movieDetail.name} <span>({movieDetail.premiered})</span>
                  </h1>
                  <p className='main-Slug'>{movieDetail.summary}</p>
                  {/* <p>Cast:{movieDetail}</p> */}
                  <p className='para-slug-status'>
                    <strong>Status: </strong>
                    {movieDetail.status}
                  </p>
                  <p className='para-slug-genre'>
                    <strong> Genre: </strong>
                    {movieDetail.genres}
                  </p>
                </div>
              </div>{' '}
              <div className='seasons-Container'>
                <ul>
                  {seasons.map((season, index) => {
                    return (
                      <li>
                        <p>
                          <strong>Season</strong> {index + 1}
                        </p>
                        <SeasonEpisodes id={season.id} image={season.image} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </>
  );
};

export default DetailsPage;
