import { useState, useEffect } from "react";
import { Status } from "enums/Status";
import axios from "axios";
import { Character } from "interfaces/Character";

type ID = string | undefined;

export const useFetchCharactersById = (id: ID) => {
  const [status, setStatus] = useState(Status.Idle);
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const fetchCharactersById = async () => {
      setStatus(Status.Loading);
      try {
        const { data } = await axios(
          `https://rickandmortyapi.com/api/character/${id}`
        );
        setCharacter(data);
        setStatus(Status.Success);
      } catch (ex) {
        setStatus(Status.Error);
      }
    };
    if (id) {
      fetchCharactersById();
    }
  }, [id]);

  return { status, character };
};
