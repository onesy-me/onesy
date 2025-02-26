import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLicenseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LicenseW100Filled'

      short_name='License'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-492q-29 0-48.5-19.5T412-560q0-29 19.5-48.5T480-628q29 0 48.5 19.5T548-560q0 29-19.5 48.5T480-492ZM292-120v-250q-38-36-59-85.21-21-49.2-21-104.79 0-112.22 77.84-190.11 77.84-77.89 190-77.89T670-750.11q78 77.89 78 190.11 0 55.59-21 104.79Q706-406 668-370v250l-188-54-188 54Zm188-200q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70Z"/>
    </Icon>
  );
});

IconMaterialLicenseW100Filled.displayName = 'OnesyIconMaterialLicenseW100Filled';

export default IconMaterialLicenseW100Filled;
