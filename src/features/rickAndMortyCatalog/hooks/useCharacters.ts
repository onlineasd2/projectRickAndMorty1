import { useState } from "react";
import type { CharacterAPIResponse } from "@/shared/dto/character";
import { useAsync, useDebounceValue } from "@siberiacancode/reactuse";
import { httpClient } from "@/api/httpClient";
import axios from "axios";
import type { Character } from "@/features/rickAndMortyCatalog/types/types";

const getCharacter = (name: string) => {
  return httpClient
    .get<CharacterAPIResponse>("/character", { params: { name } })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        return undefined;
      }
      throw err;
    });
};

export function useCharacters() {
  // ввод пользователя
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounceValue(query, 500);
  // Отправка запроса через хук
  const getCharacters = useAsync(
    async () => getCharacter(debouncedQuery),
    [debouncedQuery],
  );

  // Записываем данные
  const items: Character[] = getCharacters.data?.results ?? [];
  console.log("render");

  return {
    query,
    setQuery,
    getCharacters,
    items,
  };
}
