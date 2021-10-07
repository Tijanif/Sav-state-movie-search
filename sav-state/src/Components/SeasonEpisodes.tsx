import { useState, useEffect } from 'react';
import '../Page/DetailsPage.css';

const SeasonEpisodes = ({ id, image }) => {
  const [seasonsEpisode, setSeasonsEpisode] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/seasons/${id}/episodes`)
      .then((resp) => resp.json())
      .then((seasonsFromServer) => setSeasonsEpisode(seasonsFromServer));
  }, []);

  return (
    <div>
      {seasonsEpisode ? (
        <ul className='serial-images'>
          {seasonsEpisode.map((episode, index) => {
            return (
              <li className='image-li'>
                <img src={episode.image && episode.image.medium} alt='' />
              </li>
            );
          })}
        </ul>
      ) : (
        <img src={image} alt='' />
      )}
    </div>
  );
};

export default SeasonEpisodes;
