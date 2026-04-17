import { useState } from "react";
import type { Character, CharacterAPIResponse } from "@/shared/types/character";
import { useAsync, useDebounceValue } from '@siberiacancode/reactuse';

const ENDPOINT = "https://rickandmortyapi.com/api/character";

// Функция запроса данных
const getCharacter = (name: string) =>
    fetch(`${ENDPOINT}/?name=${encodeURIComponent(name)}`)
        .then((res) => {
            if (res.status === 404) {
                return;
            }
            if (!res.ok) {
                throw new Error(`HTTP ${res.status}: ${res.statusText}`);
            }
            return res.json() as Promise<CharacterAPIResponse>;
        });

export function useCharacters() {
  // ввод пользователя
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounceValue(query, 500);
  // Отправка запроса через хук
  const getCharacters = useAsync(
      async () => getCharacter(debouncedQuery), [debouncedQuery]
  );

  // Записываем данные
  const items: Character[] = getCharacters.data?.results ?? [];
  console.log('render');

  return (
      {
        query,
        setQuery,
        getCharacters,
        items,
      }
  )
}
