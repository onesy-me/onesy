import React from 'react';

import OnesyZip from '@onesy/zip';

const zip = React.useCallback((value: string) => {
  return new OnesyZip(value);
}, []);
