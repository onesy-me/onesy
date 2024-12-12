import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestGaleWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestGaleWifiW100'

      short_name='NestGaleWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-508h587l-13-212H200l-14 212Zm-2 28-13 208h618l-14-208H184Zm52 268-10-32h-85l33-504h612l33 504h-85l-10 32H236Z"/>
    </Icon>
  );
});

IconMaterialNestGaleWifiW100.displayName = 'OnesyIconMaterialNestGaleWifiW100';

export default IconMaterialNestGaleWifiW100;
