import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCancelScheduleSendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CancelScheduleSendW100Filled'

      short_name='CancelScheduleSend'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m670-280 60 60q4 4 9.5 4.5T750-220q5-5 5-10t-5-10l-60-60 60-60q4-4 4.5-9.5T750-380q-5-5-10-5t-10 5l-60 60-60-60q-4-4-9.5-4.5T590-380q-5 5-5 10t5 10l60 60-60 60q-4 4-4.5 9.5T590-220q5 5 10 5t10-5l60-60Zm-488-2v-128q0-11 6.5-19t17.5-10l85-19q8-2 12.5-8t4.5-14q0-8-4.5-14t-12.5-8l-85-19q-11-2-17.5-10t-6.5-19v-132q0-17 13.5-26t28.5-2l344 148q19 8 18.5 29.5T565-502q-18 8-33.5 19T502-458q-18 18-30.5 40T452-371q-2 9-8 16.5T430-343l-206 89q-15 7-28.5-2T182-282Zm488 130q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialCancelScheduleSendW100Filled.displayName = 'OnesyIconMaterialCancelScheduleSendW100Filled';

export default IconMaterialCancelScheduleSendW100Filled;
