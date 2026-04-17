import { useCharacters } from "@/features/rickAndMortyCatalog/hooks/useCharacters";
import { useFavorites } from "@/features/rickAndMortyCatalog/hooks/useFavorites";
import { SearchBar } from "@/features/rickAndMortyCatalog/ui/SearchBar";
import { CharacterList } from "@/features/rickAndMortyCatalog/ui/CharacterList";

// Composition Root
export function CharactersPage() {
  const { query, setQuery, getCharacters, items } = useCharacters();
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="p-4">
      <div className="mb-4">
        <SearchBar value={query} onChange={setQuery} loading={getCharacters.isLoading} />
      </div>

      {getCharacters.isError && <div className="text-red-600">Error: {getCharacters.error?.message}</div>}

      <CharacterList
        items={items}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
