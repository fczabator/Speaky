import { useState } from 'react';
import constate from 'constate';
import { filterIfIsNotUnique } from '../lib/helpers';

const useAppBar = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const [mode, setMode] = useState<string>();
  const [entity, setEntity] = useState<string>();

  const toggleSelected = (id: string) =>
    setSelected(filterIfIsNotUnique([...selected, id]));

  const clearAll = () => setSelected([]);

  return {
    entity,
    setEntity,
    selected,
    mode,
    setMode,
    toggleSelected,
    clearAll
  };
};

export const [AppBarProvider, useAppBarContext] = constate(useAppBar);
