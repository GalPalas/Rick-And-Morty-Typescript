import useFetchCharacters from "hooks/useFetchCharacters";
import CharacterCard from "components/CharacterCard";
import { Character } from "interfaces/Character";
import Spinner from "common/Spinner";
import { Status } from "enums/Status";

const Characters = () => {
  const { status, characters } = useFetchCharacters();

  return (
    <>
      {status === Status.Success && characters.length ? (
        <div className="container mt-4">
          <div className=" row row-cols-2 row-cols-lg-5 g-2 g-lg-3 justify-content-center">
            {characters.map((character: Character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Characters;
