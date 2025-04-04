import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAdfScannerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdfScannerW100Filled'

      short_name='AdfScanner'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M162-222v-158q0-29 19.5-48.5T230-448h62v-278q0-13 8.5-21.5T322-756h316q13 0 21.5 8.5T668-726v278h62q29 0 48.5 19.5T798-380v158q0 13-8.5 21.5T768-192H192q-13 0-21.5-8.5T162-222Zm158-226h320v-280H320v280Zm380 128q17 0 28.5-11.5T740-360q0-17-11.5-28.5T700-400q-17 0-28.5 11.5T660-360q0 17 11.5 28.5T700-320Z"/>
    </Icon>
  );
});

IconMaterialAdfScannerW100Filled.displayName = 'OnesyIconMaterialAdfScannerW100Filled';

export default IconMaterialAdfScannerW100Filled;
