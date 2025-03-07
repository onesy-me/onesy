import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSingleBedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedW100Filled'

      short_name='SingleBed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-448q0-25.06 17.63-42.53Q247.25-508 272-508h20v-88q0-24.75 17.63-42.38Q327.25-656 352-656h256q24.75 0 42.38 17.62Q668-620.75 668-596v88h20q24.75 0 42.38 17.62Q748-472.75 748-448v88q0 11-8.5 19.5t-19.74 8.5L709-259q-.89 3.23-3.11 5.12Q703.67-252 701-252h-2q-2.67 0-4.89-1.88-2.22-1.89-3.11-5.12l-11-73H280l-11 73q-.89 3.23-3.11 5.12Q263.67-252 261-252h-2q-2.67 0-4.89-1.88-2.22-1.89-3.11-5.12l-10.76-73q-11.24 0-19.74-8.5Q212-349 212-360v-88Zm282-60h146v-88q0-14-9-23t-23-9H494v120Zm-174 0h146v-120H352q-14 0-23 9t-9 23v88Z"/>
    </Icon>
  );
});

IconMaterialSingleBedW100Filled.displayName = 'OnesyIconMaterialSingleBedW100Filled';

export default IconMaterialSingleBedW100Filled;
