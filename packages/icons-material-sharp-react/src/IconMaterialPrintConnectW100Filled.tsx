import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintConnectW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectW100Filled'

      short_name='PrintConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m718-190-77-76 20-20 57 57 141-141 20 19-161 161Zm-426 18v-160H162v-276h636v101q-8-1-16.5-2t-16.5-1q-65 0-119.5 32.5T560-388H320v188h223q2 8 5.5 14.5T555-172H292Zm0-464v-120h376v120H292Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectW100Filled.displayName = 'OnesyIconMaterialPrintConnectW100Filled';

export default IconMaterialPrintConnectW100Filled;
