import { Link } from "react-router-dom";
import { Character } from "interfaces/Character";
import "./CharacterCard.css";

const CharacterCard = ({
  id,
  name,
  image,
  gender,
  species,
  status,
}: Character) => {
  return (
    <div className="card shadow p-2 mx-2">
      <img src={image} className="card-img-top rounded-circle" alt="..."></img>
      <div className="card-body d-flex flex-column align-items-center">
        <Link to={`/character/${id}`}>
          <h5 className="card-title">{name}</h5>
        </Link>

        <p className="card-text mb-0">Gender: {gender}</p>
        <p className="card-text mb-0">Species: {species}</p>
        <p className="card-text">Status: {status}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
