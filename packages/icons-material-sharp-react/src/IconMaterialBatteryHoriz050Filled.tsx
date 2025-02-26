import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryHoriz050Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz050Filled'

      short_name='BatteryHoriz050'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120H80v-160h80v-120h720v400H160Zm80-80h280v-240H240v240Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz050Filled.displayName = 'OnesyIconMaterialBatteryHoriz050Filled';

export default IconMaterialBatteryHoriz050Filled;
