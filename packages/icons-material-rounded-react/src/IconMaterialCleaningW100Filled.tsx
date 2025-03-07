import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleaningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CleaningW100Filled'

      short_name='Cleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M501-656v-42l-69.08 73.03q-.92.97-9.32 2.97-5.6 0-9.1-5.5T413-638l38-70v-28h-40q-8.5 0-14.25-5.75T391-756q0-8.5 5.75-14.25T411-776h160q11 0 19.5 8.5T599-748v17q0 4.17-.5 7.08Q598-721 596-718l-31 62h-64Zm-80 524q-24.75 0-42.37-17.63Q361-167.25 361-192v-157.98q0-8.02 1.5-14.52T368-378l125-234q4-8 10.78-12 6.79-4 15.22-4h28q12.75 0 21.38 8.62Q577-610.75 577-598v406q0 24.75-17.62 42.37Q541.75-132 517-132h-96Z"/>
    </Icon>
  );
});

IconMaterialCleaningW100Filled.displayName = 'OnesyIconMaterialCleaningW100Filled';

export default IconMaterialCleaningW100Filled;
