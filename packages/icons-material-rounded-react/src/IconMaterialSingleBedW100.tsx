import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSingleBedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SingleBedW100'

      short_name='SingleBed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-448q0-25 17.5-42.5T272-508h20v-88q0-25 17.5-42.5T352-656h256q25 0 42.5 17.5T668-596v88h20q25 0 42.5 17.5T748-448v88q0 11-8.5 19.5T720-332l-11 73q-1 3-3 5t-5 2h-2q-3 0-5-2t-3-5l-11-73H280l-11 73q-1 3-3 5t-5 2h-2q-3 0-5-2t-3-5l-11-73q-11 0-19.5-8.5T212-360v-88Zm282-60h146v-88q0-14-9-23t-23-9H494v120Zm-174 0h146v-120H352q-14 0-23 9t-9 23v88Zm-80 148h480v-88q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v88Zm480 0H240h480Z"/>
    </Icon>
  );
});

IconMaterialSingleBedW100.displayName = 'OnesyIconMaterialSingleBedW100';

export default IconMaterialSingleBedW100;
