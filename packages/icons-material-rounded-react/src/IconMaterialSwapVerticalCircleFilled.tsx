import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwapVerticalCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwapVerticalCircleFilled'

      short_name='SwapVerticalCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-606v126q0 17 11.5 28.5T400-440q17 0 28.5-11.5T440-480v-126l36 35q11 11 27.5 11t28.5-12q11-11 11-28t-11-28L429-731q-12-12-28.5-12T372-731L268-628q-11 11-11.5 27.5T268-572q11 11 27.5 11.5T324-571l36-35Zm160 252-36-35q-11-11-27.5-11T428-388q-11 11-11 28t11 28l104 104q12 12 28.5 12t28.5-12l103-104q11-11 11.5-27.5T692-388q-11-11-27.5-11.5T636-389l-36 35v-126q0-17-11.5-28.5T560-520q-17 0-28.5 11.5T520-480v126ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialSwapVerticalCircleFilled.displayName = 'OnesyIconMaterialSwapVerticalCircleFilled';

export default IconMaterialSwapVerticalCircleFilled;
