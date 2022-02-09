import { useEffect, useState } from 'react';
import { CardMovie } from '../../components/CardMovie';
import { Header } from '../../components/Header';
import { HeroMain } from '../../components/HeroMain';

import { Api } from '../../services/api';

import './style.scss';

export const Home = () => {
  const [value, setValue] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const dataMovies = async () => {
      await Api.get(
        `movie/popular?api_key=04d6016d265d98ccb0a9c62f75d23173&language=pt-BR&page=${page}&total_results=24`
      ).then((res) => setValue(res.data));
    };

    dataMovies();
  }, [page]);

  return (
    <>
      <Header />
      <HeroMain />
      <div className="container">
        <div className="movieContainer">
          {value &&
            value.results.map((v, i) => (
              <div>
                <CardMovie
                  key={i}
                  title={v.title}
                  srcImage={v.poster_path}
                  data={v.release_date}
                  id={v.id}
                />
              </div>
            ))}
        </div>

        <button onClick={() => setPage(page - 1)}> MENOS </button>
        <button onClick={() => setPage(page + 1)}> MAIS </button>
      </div>
    </>
  );
};
