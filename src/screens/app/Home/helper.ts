import { useEffect, useRef, useState } from 'react';

import { getGames } from '../../../services/rawg.api';
import { RawgGameInList } from '../../../models/responses/rawg-get-games.response';

const useHelper = () => {
  const [games, setGames] = useState<RawgGameInList[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [listLoading, setListLoading] = useState<boolean>(false);
  const nextPage = useRef<string | null>(null);

  useEffect(() => {
    callGetGames();
  }, []);

  const callGetGames = async () => {
    try {
      nextPage.current !== null ? setListLoading(true) : setLoading(true);

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

    setLoading(false);
    setListLoading(false);
  };

  return { games, loading, listLoading, callGetGames };
};

export default useHelper;
