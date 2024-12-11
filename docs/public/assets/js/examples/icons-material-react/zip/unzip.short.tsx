import React from 'react';

import OnesyZip from '@onesy/zip';

const unzip = React.useCallback((value: string) => {
  return OnesyZip.decode(value);
}, []);
