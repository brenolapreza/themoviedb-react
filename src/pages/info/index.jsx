import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Actors } from "../../components/Actors";
import { Header } from "../../components/Header";
import { HeroInfo } from "../../components/HeroInfo";
import { Api } from "../../services/api";

// /movie/${props.id}?api_key=04d6016d265d98ccb0a9c62f75d23173&language=pt-BR

export const Info = (props) => {
  const [movie, setMovie] = useState([]);
  const userId = useParams();

  async function handleGetMovies() {
    const res = await Api.get(
      `/movie/${userId.id}?api_key=04d6016d265d98ccb0a9c62f75d23173&language=pt-BR`
    ).then((res) => {
      console.log(res);
      setMovie(res.data);
    });
  }

  useEffect(() => {
    handleGetMovies();
  }, []);

  return (
    <div>
      <Header />
      <section>
        <HeroInfo
          id={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          adult={movie.adult}
          date={movie.release_date}
          language={movie.original_language}
          genre={movie.genres}
          time={movie.runtime}
          vote={movie.vote_average}
          overview={movie.overview}
          tagline={movie.tagline}
        />
      </section>

      <section className="container">
        <Actors id={props.id} />
      </section>
    </div>
  );
};
