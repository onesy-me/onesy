import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStatMinus1Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StatMinus1Filled'

      short_name='StatMinus1'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11.5-27.5T268-613q11-11 28-11t28 11l156 155 156-155q11-11 27.5-11.5T692-613q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z"/>
    </Icon>
  );
});

IconMaterialStatMinus1Filled.displayName = 'OnesyIconMaterialStatMinus1Filled';

export default IconMaterialStatMinus1Filled;
