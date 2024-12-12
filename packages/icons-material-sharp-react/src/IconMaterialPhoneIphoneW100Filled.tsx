import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneIphoneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneW100Filled'

      short_name='PhoneIphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v776H252Zm228-72q11 0 19.5-8.5T508-192q0-11-8.5-19.5T480-220q-11 0-19.5 8.5T452-192q0 11 8.5 19.5T480-164ZM280-292h400v-454H280v454Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneW100Filled.displayName = 'OnesyIconMaterialPhoneIphoneW100Filled';

export default IconMaterialPhoneIphoneW100Filled;
