import './style.scss';
import { data } from '../../services/data';
import { useEffect, useState } from 'react';
import { Api } from '../../services/api';

export const HeroMain = () => {
  const [category, setCategory] = useState();
  const [valueCategory, setValueCategory] = useState([]);

  // useEffect(() => {
  //   Api.get(
  //     '/genre/movie/list?api_key=04d6016d265d98ccb0a9c62f75d23173&language=pt-BR'
  //   ).then((res) => setCategory(res.data));
  // }, []);

  // const handleClickCategory = (e) => {
  //   console.log('clicou', e.target.value);
  //   setValueCategory(!valueCategory);
  // };

  useEffect(() => {
    Api.get(
      '/genre/movie/list?api_key=04d6016d265d98ccb0a9c62f75d23173&language=pt-BR'
    ).then(({ data }) => {
      setCategory(data);
      setValueCategory(Array(data.length).fill(false));
    });
  }, []);

  const handleClickCategory = (key) => {
    console.log('key', key);
    setValueCategory(
      valueCategory.map((value, index) => (index == key ? true : value))
    );
  };

  return (
    <div className="heroContainer">
      {data.map((value, i) => (
        <div className="container">
          <div className="headingWrapper">
            <h1 key={i}>{value.hero.heading}</h1>
          </div>
          <div className="filterWrapper">
            <p>{value.hero.subHeading}</p>
            {category &&
              category.genres.map((item, key) => (
                <input
                  className={valueCategory ? 'click' : ''}
                  type="button"
                  onClick={handleClickCategory}
                  value={item.name}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
