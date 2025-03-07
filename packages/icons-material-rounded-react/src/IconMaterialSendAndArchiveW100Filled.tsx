import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendAndArchiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendAndArchiveW100Filled'

      short_name='SendAndArchive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-245-62-62q-4-4-9.5-4.5T574-307q-5 5-5 10t5 10l75 75q9 9 21 9t21-9l75-75q4-4 4.5-9.5T766-307q-5-5-10-5t-10 5l-62 62v-150q0-6-4-10t-10-4q-6 0-10 4t-4 10v150Zm-474-37v-128q0-11 6.5-19t17.5-10l85-19q8-2 12.5-8t4.5-14q0-8-4.5-14t-12.5-8l-85-19q-11-2-17.5-10t-6.5-19v-132q0-17 13.5-26t28.5-2l344 148q19 8 18.5 29.5T565-502q-18 8-33.5 19T502-458q-18 18-30.5 40T452-371q-2 9-8 16.5T430-343l-206 89q-15 7-28.5-2T182-282Zm488 130q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialSendAndArchiveW100Filled.displayName = 'OnesyIconMaterialSendAndArchiveW100Filled';

export default IconMaterialSendAndArchiveW100Filled;
