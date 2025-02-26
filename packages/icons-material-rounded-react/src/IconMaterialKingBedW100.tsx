import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKingBedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KingBedW100'

      short_name='KingBed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-448q0-25 17.5-42.5T192-508h20v-88q0-25 17.5-42.5T272-656h416q25 0 42.5 17.5T748-596v88h20q25 0 42.5 17.5T828-448v88q0 11-8.5 19.5T800-332l-11 73q-1 3-3 5t-5 2h-2q-3 0-5-2t-3-5l-11-73H200l-11 73q-1 3-3 5t-5 2h-2q-3 0-5-2t-3-5l-11-73q-11 0-19.5-8.5T132-360v-88Zm362-60h226v-88q0-14-9-23t-23-9H494v120Zm-254 0h226v-120H272q-14 0-23 9t-9 23v88Zm-80 148h640v-88q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v88Zm640 0H160h640Z"/>
    </Icon>
  );
});

IconMaterialKingBedW100.displayName = 'OnesyIconMaterialKingBedW100';

export default IconMaterialKingBedW100;
