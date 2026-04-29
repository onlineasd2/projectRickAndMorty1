import type { Character } from "@/features/rickAndMortyCatalog/types/types";

interface Props {
  items: Character[];
  renderItem: (item: Character) => React.ReactNode;
}

export const CharacterList = ({
  items,
  renderItem
}: Props) => {
  if (!items.length)
    return <div className="text-sm text-muted-foreground mt-4">No results</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      {items.map((c) => (
          renderItem(c)
      ))}
    </div>
  );
};
