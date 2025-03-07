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
      <path d="M480-60q-63 0-106.5-43.5T330-210q0-52 31-91.5t79-53.5v-85H280q-33 0-56.5-23.5T200-520v-80h-60q-17 0-28.5-11.5T100-640v-200q0-17 11.5-28.5T140-880h200q17 0 28.5 11.5T380-840v200q0 17-11.5 28.5T340-600h-60v80h400v-85q-48-14-79-53.5T570-750q0-63 43.5-106.5T720-900q63 0 106.5 43.5T870-750q0 52-31 91.5T760-605v85q0 33-23.5 56.5T680-440H520v85q48 14 79 53.5t31 91.5q0 63-43.5 106.5T480-60Z"/>
    </Icon>
  );
});

IconMaterialFamilyHistoryFilled.displayName = 'OnesyIconMaterialFamilyHistoryFilled';

export default IconMaterialFamilyHistoryFilled;
