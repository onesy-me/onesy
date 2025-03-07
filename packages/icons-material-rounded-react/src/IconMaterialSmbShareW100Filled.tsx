import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmbShareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmbShareW100Filled'

      short_name='SmbShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M449-456h185q17 0 29-12t12-29q0-17-12-29.5T634-539h-28l-4-25q-3-25-22.5-42.5T534-624q-21 0-37 11t-25 29l-8 16-19 1q-22 2-37 17t-15 38q0 23 16.5 39.5T449-456ZM152-184q-26 0-43-17t-17-43v-354q0-6 4-10t10-4q6 0 10 4t4 10v354q0 12 10 22t22 10h584q6 0 10 4t4 10q0 6-4 10t-10 4H152Zm108-108q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h195q12 0 23.5 5t19.5 13l22 22h288q26 0 43 17t17 43v376q0 26-17 43t-43 17H260Z"/>
    </Icon>
  );
});

IconMaterialSmbShareW100Filled.displayName = 'OnesyIconMaterialSmbShareW100Filled';

export default IconMaterialSmbShareW100Filled;
