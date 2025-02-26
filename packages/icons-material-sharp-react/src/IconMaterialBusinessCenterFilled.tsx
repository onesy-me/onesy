import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusinessCenterFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusinessCenterFilled'

      short_name='BusinessCenter'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-240h280v80h240v-80h280v240H80Zm360-240v-80h80v80h-80ZM80-440v-280h240v-160h320v160h240v280H600v-80H360v80H80Zm320-280h160v-80H400v80Z"/>
    </Icon>
  );
});

IconMaterialBusinessCenterFilled.displayName = 'OnesyIconMaterialBusinessCenterFilled';

export default IconMaterialBusinessCenterFilled;
