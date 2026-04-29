import { useFavorites } from "@/features/rickAndMortyCatalog/hooks/useFavorites";
import { CharacterList } from "@/features/rickAndMortyCatalog/ui/CharacterList";
import {CharacterCard} from "@/features/rickAndMortyCatalog/ui/CharacterCard.tsx";

export function FavoritesPage() {
  const { list, remove, isFavorite, toggleFavorite } = useFavorites();

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
        renderItem={(c) => <CharacterCard character={c} favorite={isFavorite(c.id)} onToggleFavorite={toggleFavorite} />}
      />
    </div>
  );
}
