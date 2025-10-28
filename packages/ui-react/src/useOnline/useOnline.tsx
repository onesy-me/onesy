import React from 'react';

import { isEnvironment } from '@onesy/utils';

const useOnline = () => {
  const [online, setOnline] = React.useState(isEnvironment('browser') ? window.navigator.onLine : true);

  React.useEffect(() => {
    const onOnline = () => setOnline(true);
    const onOffline = () => setOnline(false);

    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);

    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  return online;
};

export default useOnline;
