import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFileCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileCopyW100Filled'

      short_name='FileCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-252H352q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h249q12 0 23.5 5t19.5 13l126 126q8 8 13 19.5t5 23.5v369q0 26-17 43t-43 17Zm32-440L612-840v118q0 13 8.5 21.5T642-692h118ZM192-92q-26 0-43-17t-17-43v-462q0-6 4-10t10-4q6 0 10 4t4 10v462q0 12 10 22t22 10h342q6 0 10 4t4 10q0 6-4 10t-10 4H192Z"/>
    </Icon>
  );
});

IconMaterialFileCopyW100Filled.displayName = 'OnesyIconMaterialFileCopyW100Filled';

export default IconMaterialFileCopyW100Filled;
