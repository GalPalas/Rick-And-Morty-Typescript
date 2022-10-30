import { useFetchCharactersById } from "hooks/useFetchCharacterById";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Character.css";

const Character = () => {
  const { id } = useParams();

  const { status, character } = useFetchCharactersById(id);

  return (
    <div className="container p-2">
      <div className="row justify-content-center align-items-center text-center">
        <img src={"https://picsum.photos/900/400"} alt="" />
        <img
          className="rounded-circle p-0 profile"
          src={character?.image}
          alt=""
        />
        <h2 className="text-info">{character?.name}</h2>
        <p className="lead">Status:{character?.status}</p>
      </div>

      <div className="row">
        <div className="col">
          <h3>General info</h3>
          <p>
            <strong>Species - </strong>
            {character?.species}
          </p>

          <p>
            <strong>Gender - </strong>
            {character?.gender}
          </p>
        </div>
        <div className="col">
          <h3>Current location</h3>
          <p>{character?.location?.name}</p>
          <a href={character?.location?.url}>
            Go to {character?.location?.name}
          </a>
        </div>
        <div className="col">
          <h3>Origin</h3>
          <p>{character?.origin?.name}</p>
          <a href={character?.origin?.url}>Go to {character?.origin?.name}</a>
        </div>
      </div>

      <div className="row ">
        <h3>Episodes</h3>
        {character?.episode?.map((episode, i) => (
          <div key={i} className="episodes mx-1 p-1">
            <span className="badge rounded-pill bg-info text-dark episode">
              <Link to={episode}>episode {i + 1}</Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Character;
