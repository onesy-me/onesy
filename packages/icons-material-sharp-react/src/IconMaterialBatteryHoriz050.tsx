import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryHoriz050 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz050'

      short_name='BatteryHoriz050'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120H80v-160h80v-120h720v400H160Zm80-80h280v-240H240v240Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz050.displayName = 'OnesyIconMaterialBatteryHoriz050';

export default IconMaterialBatteryHoriz050;
