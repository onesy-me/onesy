import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBadgeCriticalBattery = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BadgeCriticalBattery'

      short_name='BadgeCriticalBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-280q-17 0-28.5-11.5T160-320v-80h-40q-17 0-28.5-11.5T80-440v-80q0-17 11.5-28.5T120-560h40v-80q0-17 11.5-28.5T200-680h640q17 0 28.5 11.5T880-640v320q0 17-11.5 28.5T840-280H200Zm40-80h520v-240H240v240Z"/>
    </Icon>
  );
});

IconMaterialBadgeCriticalBattery.displayName = 'OnesyIconMaterialBadgeCriticalBattery';

export default IconMaterialBadgeCriticalBattery;
