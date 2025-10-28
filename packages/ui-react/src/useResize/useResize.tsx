import React from 'react';

import { isEnvironment } from '@onesy/utils';

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = React.useState(() => {
    if (isEnvironment('browser')) return window.innerWidth;

    return 0;
  });

  React.useEffect(() => {
    const onResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (isEnvironment('browser')) {
      setWindowWidth(window.innerWidth);

      window.addEventListener('resize', onResize);

      return () => window.removeEventListener('resize', onResize);
    }
  }, []);

  return windowWidth;
};

export default useWindowWidth;
