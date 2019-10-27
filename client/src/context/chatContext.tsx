import { useState } from 'react';
import constate from 'constate';
import { filterIfIsNotUnique } from '../lib/helpers';

const useChat = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const toggleSelected = (id: string) =>
    setSelected(filterIfIsNotUnique([...selected, id]));

  return { selected, toggleSelected };
};

export const [ChatProvider, useChatContext] = constate(useChat);
