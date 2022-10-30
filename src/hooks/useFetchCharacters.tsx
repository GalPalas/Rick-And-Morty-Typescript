import axios from "axios";
import { useState, useEffect } from "react";
import { Character } from "interfaces/Character";

export const useFetchCharacters = () => {
  const [status, setStatus] = useState<string>("idle");
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      setStatus("loading");
      try {
        const { data } = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );

        setStatus("success");
        setCharacters(data.results);
      } catch (e) {
        setStatus("error");
      }
    };
    fetchCharacters();
  }, []);

  return { status, characters };
};

export default useFetchCharacters;
