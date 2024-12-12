import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoogleWifiW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleWifiW100'

      short_name='GoogleWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M186-508h587l-11-182q-1-13-10-21.5t-22-8.5H230q-13 0-22 8.5T198-690l-12 182Zm20 236h547q14 0 24.5-10t9.5-24l-12-174H184l-11 174q-1 14 9 24t24 10Zm30 60-10-32h-21q-26 0-44-19t-16-45l25-384q2-24 19-40t41-16h500q24 0 41 16t19 40l25 384q2 26-16 45t-44 19h-21l-10 32H236Z"/>
    </Icon>
  );
});

IconMaterialGoogleWifiW100.displayName = 'OnesyIconMaterialGoogleWifiW100';

export default IconMaterialGoogleWifiW100;
