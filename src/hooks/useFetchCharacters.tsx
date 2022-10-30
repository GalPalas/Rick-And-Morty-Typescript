import axios from "axios";
import { useState, useEffect } from "react";
import { Character } from "interfaces/Character";
import { Status } from "enums/Status";

export const useFetchCharacters = () => {
  const [status, setStatus] = useState<string>("idle");
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setStatus(Status.Loading);
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

        setStatus(Status.Success);
        setCharacters(data.results);
      } catch (e) {
        setStatus(Status.Error);
      }
    };
    fetchCharacters();
  }, []);

  return { status, characters };
};

export default useFetchCharacters;
