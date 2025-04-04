import React from 'react';
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  const { search } = useLocation();

  const value = React.useMemo(() => new URLSearchParams(search), [search]);

  return value;
};

useQuery.displayName = 'onesy-UseQuery';

export default useQuery;
