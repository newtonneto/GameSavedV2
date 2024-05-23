import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

import { getGame } from '../../../services/rawg.api';
import { RawgGetGameResponse } from '../../../models/responses/rawg-get-game.response';

type RouteParams = {
  id: number;
};

const useHelper = () => {
  const route = useRoute();
  const [loading, setLoading] = useState<boolean>(false);
  const [game, setGame] = useState<RawgGetGameResponse>();
  const { id } = route.params as RouteParams;

  useEffect(() => {
    callGetGame();
  }, []);

  const callGetGame = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await getGame(id);

      response?.data && setGame(response.data);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  const parseDate = (originalDate: string): string => {
    const parsedDate = new Date(originalDate);
    const month = `${parsedDate.getMonth() + 1}`.padStart(2, '0');
    const day = `${parsedDate.getDate()}`.padStart(2, '0');

    return `${month}/${day}/${parsedDate.getFullYear()}`;
  };

  const sanitizeText = (text: string): string => {
    return text.replace(/<\/?[^>]+(>|$)/g, '');
  };

  return { game, loading, parseDate, sanitizeText };
};

export default useHelper;
