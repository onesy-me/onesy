import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIronFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IronFilled'

      short_name='Iron'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-240v-120q0-66 47-113t113-47h360v-80H360v40h-80v-120h400v280h40v-320h160v80h-80v320H680v80H80Z"/>
    </Icon>
  );
});

IconMaterialIronFilled.displayName = 'OnesyIconMaterialIronFilled';

export default IconMaterialIronFilled;
