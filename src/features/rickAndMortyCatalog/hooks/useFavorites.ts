import { useCallback, useMemo } from "react";
import type { Character } from "../../../shared/types/character";
import { useLocalStorage } from '@siberiacancode/reactuse';

const LS_KEY = "favorites_characters_v1";

export function useFavorites() {
  const { value, set, remove } = useLocalStorage<Record<number, Character>>(LS_KEY, {})

  const isFavorite = useCallback(
    (id: number) => Boolean(value?.[id]),
    [value],
  );

  const toggleFavorite = useCallback((char: Character) => {
    const current = value ?? {};
    const next = { ...current };

    if (next[char.id]) {
      delete next[char.id];
    } else {
      next[char.id] = char;
    }

    set(next);
  }, [set, value]);

  const list = useMemo(
      () => Object.values(value ?? {}),
      [value]
  );

  return { value, list, isFavorite, toggleFavorite, remove };
}
