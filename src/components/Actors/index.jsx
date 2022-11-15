import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../services/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import ImageDefault from "../../assets/images/default.jpg";



export const Actors = (props) => {
  const [infoActor, setInfoActor] = useState();

  const params = useParams();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  [{
    breakpoint: 1024,
    settings: {slidesToShow: 3, slidesToScroll: 3}
  }];

  const getDataActor = async () => {
    return await Api.get(
      `/movie/${params.id}/credits?api_key=04d6016d265d98ccb0a9c62f75d23173&language=pt-BR`
    );
  };

  useEffect(() => {
      getDataActor().then((res) => setInfoActor(res.data))
  }, []);

  return (
    <Slider {...settings}>
      {infoActor &&
        infoActor.cast.map((actor, i) => (
          <div className="itemCarousel" key={i}>
            <div className="itemImagem">

              <img
                src={
                  actor.profile_path !== null
                    ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                    : ImageDefault
                }
              />
            </div>
            <h3>{actor.name}</h3>
            <span>{actor.known_for_department}</span>
          </div>
        ))}
    </Slider>
  );
};
