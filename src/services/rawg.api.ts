import axios, { AxiosResponse } from 'axios';
import { RawgGetGamesResponse } from '../models/responses/rawg-get-games.response';

interface ApiHandler {
  get<T>(url: string): Promise<AxiosResponse<T>>;
}

const RAWG_KEY = '';
const client = axios.create({
  baseURL: 'https://api.rawg.io/api',
});

const rawg: ApiHandler = {
  get: async url => {
    return client.get(url);
  },
};

const getGames = async (url: string | null = null) => {
  try {
    if (!url) {
      const response = await rawg.get<RawgGetGamesResponse>(
        `/games?&key=${RAWG_KEY}`,
      );

      return response;
    } else {
      const response = await axios.get<RawgGetGamesResponse>(`${url}`);

      return response;
    }
  } catch (error) {
    //TO-DO: Handle error
    console.error(error);
  }
};

export { getGames };
