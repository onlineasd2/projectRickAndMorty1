import { useFavorites } from "@/features/rickAndMortyCatalog/hooks/useFavorites";
import { CharacterList } from "@/features/rickAndMortyCatalog/ui/CharacterList";

export function FavoritesPage() {
  const { list, isFavorite, toggleFavorite, remove } = useFavorites();

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Favorites</h2>
        {list.length > 0 && (
          <button
            className="text-sm underline text-muted-foreground"
            onClick={remove}
            title="Clear all favorites"
          >
            Clear all
          </button>
        )}
      </div>
      <CharacterList
        items={list}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
