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
      <path d="M746-224q5-5 5-10t-5-10l-62-62v-94q0-6-4-10t-10-4q-6 0-10 4t-4 10v94q0 6 2 11t7 10l61 61q4 4 9.5 4.5T746-224Zm-564-58v-128q0-11 6.5-19t17.5-10l85-19q8-2 12.5-8t4.5-14q0-8-4.5-14t-12.5-8l-85-19q-11-2-17.5-10t-6.5-19v-132q0-17 13.5-26t28.5-2l344 148q19 8 18.5 29.5T565-502q-18 8-33.5 19T502-458q-18 18-30.5 40T452-371q-2 9-8 16.5T430-343l-206 89q-15 7-28.5-2T182-282Zm488 130q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialScheduleSendW100Filled.displayName = 'OnesyIconMaterialScheduleSendW100Filled';

export default IconMaterialScheduleSendW100Filled;
