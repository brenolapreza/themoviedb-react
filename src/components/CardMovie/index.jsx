import { Link } from 'react-router-dom';
import './style.scss';

export const CardMovie = (props) => {
  return (
    <a href={props.id} className="imageWrapper">
      <img src={`https://image.tmdb.org/t/p/original/${props.srcImage}`} />
      <div className="description">
        <h2>{props.title}</h2>
      </div>
      <div className="data">
        <h4>{props.data}</h4>
      </div>
    </a>
  );
};
