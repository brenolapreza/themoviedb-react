import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../services/api";
import "./style.scss";

export const CreditInfo = (props) => {
  const [info, setInfo] = useState("");
  const params = useParams();

  const getData = () => {
    Api.get(
      `/movie/${params.id}/credits?api_key=04d6016d265d98ccb0a9c62f75d23173&language=pt-BR`
    ).then((res) => setInfo(res.data));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <ul className="listCredit">
        {info &&
          info.cast.map((actor, i) => (
            <li key={i}>
              <div>{actor.known_for_department}</div>
              <div>{actor.name}</div>
              {console.log(actor)}
            </li>
          ))}
      </ul>
    </div>
  );
};
