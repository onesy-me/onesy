import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScannerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScannerW100Filled'

      short_name='Scanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M724-428 222-610q-5.33-1.83-7.67-6.42Q212-621 214-626t7-8q5-3 10-1l499 181q32 12 45 36t13 50v96q0 26-17 43t-43 17H232q-26 0-43-17t-17-43v-96q0-26 17-43t43-17h492ZM422-306h258q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H422q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Zm-141.93 14q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q268-348 260-339.93t-8 20q0 11.93 8.07 19.93t20 8Z"/>
    </Icon>
  );
});

IconMaterialScannerW100Filled.displayName = 'OnesyIconMaterialScannerW100Filled';

export default IconMaterialScannerW100Filled;
