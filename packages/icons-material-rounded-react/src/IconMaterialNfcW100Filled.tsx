import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNfcW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NfcW100Filled'

      short_name='Nfc'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M598-332q13 0 21.5-8.5T628-362v-236q0-13-8.5-21.5T598-628H494q-12 0-20 8t-8 20v92q-6 3-12 9.5t-6 18.5q0 14 8.5 23t23.5 9q12 0 22-9t10-23q0-12-6-18.5t-12-9.5v-92h106v240H360v-240h26q6 0 10-4t4-10q0-6-4-10t-10-4h-24q-13 0-21.5 8.5T332-598v236q0 13 8.5 21.5T362-332h236ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialNfcW100Filled.displayName = 'OnesyIconMaterialNfcW100Filled';

export default IconMaterialNfcW100Filled;
