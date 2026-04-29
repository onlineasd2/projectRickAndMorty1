export interface CharacterAPIResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: {
    id: number;
    name: string;
    image: string;
    status: string;
    species: string;
  }[];
}
