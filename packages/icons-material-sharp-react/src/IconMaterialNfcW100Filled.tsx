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
      <path d="M332-332h296v-296H494q-12 0-20 8t-8 20v92q-6 3-12 9.5t-6 18.5q0 14 8.5 23t23.5 9q12 0 22-9t10-23q0-12-6-18.5t-12-9.5v-92h106v240H360v-240h40v-28h-68v296ZM172-172v-616h616v616H172Z"/>
    </Icon>
  );
});

IconMaterialNfcW100Filled.displayName = 'OnesyIconMaterialNfcW100Filled';

export default IconMaterialNfcW100Filled;
