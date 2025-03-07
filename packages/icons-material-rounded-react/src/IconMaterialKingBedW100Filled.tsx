import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKingBedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedW100Filled'

      short_name='KingBed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-448q0-25.06 17.63-42.53Q167.25-508 192-508h20v-88q0-24.75 17.63-42.38Q247.25-656 272-656h416q24.75 0 42.38 17.62Q748-620.75 748-596v88h20q24.75 0 42.38 17.62Q828-472.75 828-448v88q0 11-8.5 19.5t-19.74 8.5L789-259q-.89 3.23-3.11 5.12Q783.67-252 781-252h-2q-2.67 0-4.89-1.88-2.22-1.89-3.11-5.12l-11-73H200l-11 73q-.89 3.23-3.11 5.12Q183.67-252 181-252h-2q-2.67 0-4.89-1.88-2.22-1.89-3.11-5.12l-10.76-73q-11.24 0-19.74-8.5Q132-349 132-360v-88Zm362-60h226v-88q0-14-9-23t-23-9H494v120Zm-254 0h226v-120H272q-14 0-23 9t-9 23v88Z"/>
    </Icon>
  );
});

IconMaterialKingBedW100Filled.displayName = 'OnesyIconMaterialKingBedW100Filled';

export default IconMaterialKingBedW100Filled;
