import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyHistoryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHistoryFilled'

      short_name='FamilyHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-60q-63 0-106.5-43.5T330-210q0-52 31-91.5t79-53.5v-85H200v-160H100v-280h280v280H280v80h400v-85q-48-14-79-53.5T570-750q0-63 43.5-106.5T720-900q63 0 106.5 43.5T870-750q0 52-31 91.5T760-605v165H520v85q48 14 79 53.5t31 91.5q0 63-43.5 106.5T480-60Z"/>
    </Icon>
  );
});

IconMaterialFamilyHistoryFilled.displayName = 'OnesyIconMaterialFamilyHistoryFilled';

export default IconMaterialFamilyHistoryFilled;
