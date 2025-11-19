import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileVibrateW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileVibrateW100Filled'

      short_name='MobileVibrate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M76-386v-188h28v188H76Zm108 80v-348h28v348h-28Zm672-80v-188h28v188h-28Zm-108 80v-348h28v348h-28ZM282-172v-616h396v616H282Zm200.07-452q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q470-680 462-671.93t-8 20q0 11.93 8.07 19.93t20 8Z"/>
    </Icon>
  );
});

IconMaterialMobileVibrateW100Filled.displayName = 'OnesyIconMaterialMobileVibrateW100Filled';

export default IconMaterialMobileVibrateW100Filled;
