import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhoneIphoneW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhoneIphoneW100'

      short_name='PhoneIphone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-92v-776h456v776H252Zm28-172v144h400v-144H280Zm200 100q11 0 19.5-8.5T508-192q0-11-8.5-19.5T480-220q-11 0-19.5 8.5T452-192q0 11 8.5 19.5T480-164ZM280-292h400v-454H280v454Zm0-482h400v-66H280v66Zm0 510v144-144Zm0-510v-66 66Z"/>
    </Icon>
  );
});

IconMaterialPhoneIphoneW100.displayName = 'OnesyIconMaterialPhoneIphoneW100';

export default IconMaterialPhoneIphoneW100;
