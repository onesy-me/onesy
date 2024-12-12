import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScheduleSendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScheduleSendW100Filled'

      short_name='ScheduleSend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M182-236v-198l208-46-208-46v-202l467 201q-75 9-133 56t-68 120L182-236Zm488 84q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm66-62 20-20-72-71.61V-414h-28v120l80 80Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendW100Filled.displayName = 'OnesyIconMaterialScheduleSendW100Filled';

export default IconMaterialScheduleSendW100Filled;
