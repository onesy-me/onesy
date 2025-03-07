import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPrintConnectW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrintConnectW100'

      short_name='PrintConnect'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M190-580h580-580Zm102 408v-160H162v-276h636v101l-14-2q-7-1-14-1v-70H190v220h102v-56h286q-5 7-9.5 13.5T560-388H320v188h223q2 8 5.5 14.5T555-172H292Zm426-18-77-76 20-20 57 57 141-141 20 19-161 161Zm-78-418v-120H320v120h-28v-148h376v148h-28Z"/>
    </Icon>
  );
});

IconMaterialPrintConnectW100.displayName = 'OnesyIconMaterialPrintConnectW100';

export default IconMaterialPrintConnectW100;
