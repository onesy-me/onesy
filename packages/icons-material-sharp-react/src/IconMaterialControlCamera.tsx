import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialControlCamera = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ControlCamera'

      short_name='ControlCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479-359q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0 279L309-250l57-57 114 114 113-113 56 56L479-80ZM249-309 79-479l170-170 57 57-114 114 113 113-56 56Zm116-345-56-56 170-170 170 170-57 57-114-114-113 113Zm344 345-57-57 114-114-113-113 56-56 170 170-170 170Z"/>
    </Icon>
  );
});

IconMaterialControlCamera.displayName = 'OnesyIconMaterialControlCamera';

export default IconMaterialControlCamera;
