import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryHoriz075 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryHoriz075'

      short_name='BatteryHoriz075'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120H80v-160h80v-120h720v400H160Zm80-80h160v-240H240v240Z"/>
    </Icon>
  );
});

IconMaterialBatteryHoriz075.displayName = 'OnesyIconMaterialBatteryHoriz075';

export default IconMaterialBatteryHoriz075;
