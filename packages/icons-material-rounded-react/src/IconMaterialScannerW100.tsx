import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScannerW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerW100'

      short_name='Scanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M724-428 222-610q-5-2-7.5-6.5t-.5-9.5q2-5 7-8t10-1l499 181q32 12 45 36t13 50v96q0 26-17 43t-43 17H232q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h492Zm4 188q12 0 22-10t10-22v-96q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v96q0 12 10 22t22 10h496Zm-306-66h258q6 0 10-4t4-10q0-6-4-10t-10-4H422q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-142 14q12 0 20-8t8-20q0-12-8-20t-20-8q-12 0-20 8t-8 20q0 12 8 20t20 8Zm-80 52v-160 160Z"/>
    </Icon>
  );
});

IconMaterialScannerW100.displayName = 'OnesyIconMaterialScannerW100';

export default IconMaterialScannerW100;
