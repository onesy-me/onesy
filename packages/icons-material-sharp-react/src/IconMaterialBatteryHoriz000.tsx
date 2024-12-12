import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryHoriz000 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz000'

      short_name='BatteryHoriz000'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120H80v-160h80v-120h720v400H160Zm80-80h560v-240H240v240Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz000.displayName = 'OnesyIconMaterialBatteryHoriz000';

export default IconMaterialBatteryHoriz000;
