import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamStand = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStand'

      short_name='NestCamStand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-643q-40 27-65.5 69.5T264-480l-24 280h480l-24-280q-4-52-29.5-94.5T600-644v84q0 50-35 85t-85 35q-50 0-85-35t-35-85v-83Zm120 123q17 0 28.5-11.5T520-560v-160q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v160q0 17 11.5 28.5T480-520Zm0-320q46 0 79.5 29.5T599-736q74 32 122.5 97.5T776-488l31 368H153l31-368q7-85 55-150t122-97q6-45 39.5-75t79.5-30Z"/>
    </Icon>
  );
});

IconMaterialNestCamStand.displayName = 'OnesyIconMaterialNestCamStand';

export default IconMaterialNestCamStand;
