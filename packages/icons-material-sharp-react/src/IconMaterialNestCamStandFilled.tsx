import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamStandFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStandFilled'

      short_name='NestCamStand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m152-120 32-368q5-72 42-131t94-95v154q0 66 47 113t113 47q67 0 113.5-47T640-560v-154q57 36 94 95t42 131l31 368H152Zm328-360q-33 0-56.5-23.5T400-560v-160q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720v160q0 33-23.5 56.5T480-480Z"/>
    </Icon>
  );
});

IconMaterialNestCamStandFilled.displayName = 'OnesyIconMaterialNestCamStandFilled';

export default IconMaterialNestCamStandFilled;
