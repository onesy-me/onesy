import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamStandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStandW100'

      short_name='NestCamStand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M412-669q-60 20-101 71t-47 118l-21 245q-2 14 8 24.5t24 10.5h410q14 0 24-10.5t8-24.5l-21-245q-5-67-46-118t-102-71v109q0 29-19.5 48.5T480-492q-29 0-48.5-19.5T412-560v-109Zm68 149q17 0 28.5-11.5T520-560v-160q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v160q0 17 11.5 28.5T480-520ZM275-172q-26 0-44-19.5T215-237l21-247q7-78 55.5-136T412-698v-22q0-29 19.5-48.5T480-788q29 0 48.5 19.5T548-720v22q72 20 121 78t56 136l21 247q2 26-16 45.5T686-172H275Z"/>
    </Icon>
  );
});

IconMaterialNestCamStandW100.displayName = 'OnesyIconMaterialNestCamStandW100';

export default IconMaterialNestCamStandW100;
