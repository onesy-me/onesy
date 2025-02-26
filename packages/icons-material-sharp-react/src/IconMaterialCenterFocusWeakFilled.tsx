import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCenterFocusWeakFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CenterFocusWeakFilled'

      short_name='CenterFocusWeak'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM120-120v-240h80v160h160v80H120Zm480 0v-80h160v-160h80v240H600ZM120-600v-240h240v80H200v160h-80Zm640 0v-160H600v-80h240v240h-80Z"/>
    </Icon>
  );
});

IconMaterialCenterFocusWeakFilled.displayName = 'OnesyIconMaterialCenterFocusWeakFilled';

export default IconMaterialCenterFocusWeakFilled;
