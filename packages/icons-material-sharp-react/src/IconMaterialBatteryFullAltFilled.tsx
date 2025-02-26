import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryFullAltFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullAltFilled'

      short_name='BatteryFullAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120H80v-160h80v-120h720v400H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullAltFilled.displayName = 'OnesyIconMaterialBatteryFullAltFilled';

export default IconMaterialBatteryFullAltFilled;
