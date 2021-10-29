/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
// import { FaStar } from 'react-icons/fa';
import { useLocation, useParams } from 'react-router-dom';
import * as S from '../styles/components/animesCards';
import { Context } from '../provider/Provider';

import Footbar from './footbar';

const CardsDetails = () => {
  const { animeOnDetails, fetchCastById } = useContext(Context);
  const [ratingPossibleNotes, setRatingPossibleNotes] = useState([]);
  const { id } = useParams();
  console.log(id, 'id');

  const pushRatingPossibleNotes = () => {
    const batata = [];
    for (let i = 1; i < 11; i += 1) {
      batata.push(i);
      setRatingPossibleNotes(batata);
      console.log(ratingPossibleNotes, 'ratings', i);
    }
  };
  useEffect(() => {
    pushRatingPossibleNotes();
    fetchCastById(id);
  }, []);

  const renderAnimeDetailsCard = () => {
    console.log(animeOnDetails.attributes, 'mey', ratingPossibleNotes);
    const { attributes: { slug, averageRating, synopsis, youtubeVideoId, status, coverImage: { tiny }, posterImage: { medium }, ratingRank, startDate } } = animeOnDetails;
    return (
      <div>
        <img src={ tiny } alt={ slug } />

        <h1>{slug}</h1>
        <img src={ medium } alt={ slug } />
        <h3>{averageRating}</h3>
        <select>

          { ratingPossibleNotes.map((el) => (<option value={ el } key={ el }>{el}</option>))}

        </select>

        <button type="button">Enviar nota</button>
        <p>
          sinopse:
          {' '}
          {synopsis}
        </p>
        <h3>
          status:
          {status}
        </h3>
        <h3>
          data de inicio:
          {startDate}
        </h3>
        <h3>
          ranking:
          {ratingRank}
        </h3>
        <iframe
          src={ `https://www.youtube.com/embed/${youtubeVideoId}` }
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </div>
    );
  };

  const checkRender = () => {
    if (ratingPossibleNotes && animeOnDetails.id) return true;
    return false;
  };
  return (
    <div>
      {checkRender() === true && renderAnimeDetailsCard()}
      {console.log(animeOnDetails, ratingPossibleNotes, 'teste', ratingPossibleNotes.length)}

      <Footbar />
    </div>
  );
};

export default CardsDetails;
