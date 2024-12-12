import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQuickreplyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyFilled'

      short_name='Quickreply'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-40v-200h-80v-240h200l-68 160h88L760-40ZM80-80v-800h800v320H600v320H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyFilled.displayName = 'OnesyIconMaterialQuickreplyFilled';

export default IconMaterialQuickreplyFilled;
