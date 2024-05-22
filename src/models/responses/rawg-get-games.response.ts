export interface RawgGetGamesResponse {
  count: number;
  next: string;
  previous: string;
  results: RawgGameInList[];
}

export interface RawgGameInList {
  id: number;
  slug: string;
  name: string;
  released: string;
  tba: boolean;
  background_image: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  reviews_text_count: string;
  added: number;
  metacritic: number;
  playtime: number;
  updated: string;
}
