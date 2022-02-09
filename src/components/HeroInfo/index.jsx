import './style.scss';
import { data } from '../../services/data';
import { useEffect, useState } from 'react';
import { Api } from '../../services/api';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CreditInfo } from '../CreditInfo';

export const HeroInfo = (props) => {
  //Format date
  const date = new Date(props.date);
  const formatDate = date.toLocaleDateString('pt-BR');
  const year = date.getFullYear();

  //Format Genres
  const mapGenres =
    props.genre &&
    props.genre.map((e) => {
      return e.name;
    });

  //Format runtime
  const formatRuntime = () => {
    let arrayValue = [];
    let value = String(props.time && props.time / 60);
    console.log(arrayValue.push(value));
  };

  formatRuntime();

  //Format Percent
  const valuePercent = props.vote * 10;
  console.log(valuePercent);

  return (
    <div className="heroInfoContainer">
      <div className="gridHeroInfo">
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/original/${props.poster}`}
            alt=""
          />
        </div>
        <div className="info">
          <h1>{` ${props.title} (${year})`}</h1>
          <p>
            {`${props.adult ? '+18' : ''} 
            ${formatDate} • 
            (${props.language}) • 
            ${mapGenres} • 
            ${`fala ai ze`}
            `}
          </p>
          <div className="progressBarWrapper">
            <div style={{ width: 61, height: 61 }}>
              <CircularProgressbar
                value={valuePercent}
                text={`${valuePercent}%`}
                strokeWidth={12}
                background={true}
                styles={{
                  path: {
                    stroke: `#14FF00, ${valuePercent})`,
                  },
                  trail: {
                    stroke: '#42246D',
                  },
                  text: {
                    fill: '#14FF00',
                    fontSize: '2.4rem',
                  },
                  background: {
                    fill: '#42246D',
                  },
                }}
              />
            </div>
            <p>
              Avaliação dos <br />
              usuários
            </p>
          </div>
          <div className="sinopse">
            <h3>Sinopse</h3>
            <p>{props.overview}</p>
          </div>
          <div>
            <CreditInfo id={props.id} />
          </div>
        </div>
      </div>
    </div>
  );
};
