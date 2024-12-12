import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryFullAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryFullAlt'

      short_name='BatteryFullAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-120H80v-160h80v-120h720v400H160Z"/>
    </Icon>
  );
});

IconMaterialBatteryFullAlt.displayName = 'OnesyIconMaterialBatteryFullAlt';

export default IconMaterialBatteryFullAlt;
