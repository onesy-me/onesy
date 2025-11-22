import React from 'react';

import { isEnvironment } from '@onesy/utils';

const useResize = () => {
  const [width, setWidth] = React.useState(() => {
    if (isEnvironment('browser')) return window.innerWidth;

    return 0;
  });

  const refs = {
    width: React.useRef(width)
  };

  refs.width.current = width;

  React.useEffect(() => {
    const onResize = () => {
      const newWidth = window.innerWidth;

      if (refs.width.current === newWidth) return;

      setWidth(newWidth);
    };

    if (isEnvironment('browser')) {
      const newWidth = window.innerWidth;

      if (refs.width.current !== newWidth) setWidth(newWidth);

      window.addEventListener('resize', onResize);

      return () => window.removeEventListener('resize', onResize);
    }
  }, []);

  return width;
};

export default useResize;
