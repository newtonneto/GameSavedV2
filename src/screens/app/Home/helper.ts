import { useEffect, useRef, useState } from 'react';

import { getGames } from '../../../services/rawg.api';
import { RawgGameInList } from '../../../models/responses/rawg-get-games.response';

const useHelper = () => {
  const [games, setGames] = useState<RawgGameInList[]>([]);
  const nextPage = useRef<string | null>(null);

  useEffect(() => {
    // callGetGames();
  }, []);

  const callGetGames = async () => {
    try {
      const response = await getGames(nextPage.current);

      if (response?.data.next) {
        nextPage.current = response.data.next;
      } else {
        nextPage.current = '';
      }

      if (response?.data.results) {
        setGames([...games, ...response.data.results]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { games, callGetGames };
};

export default useHelper;
