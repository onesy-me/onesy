import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEarbudsBatteryFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarbudsBatteryFilled'

      short_name='EarbudsBattery'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-240v-440h80v-40h80v40h80v440H640Zm-425 0q-57 0-96-39t-39-96v-345h160v160H140v185q0 32 21.5 53.5T215-300q32 0 53.5-21.5T290-375v-210q0-57 39-96t96-39q57 0 96 39t39 96v345H400v-160h100v-185q0-32-21.5-53.5T425-660q-32 0-53.5 21.5T350-585v210q0 57-39 96t-96 39Z"/>
    </Icon>
  );
});

IconMaterialEarbudsBatteryFilled.displayName = 'OnesyIconMaterialEarbudsBatteryFilled';

export default IconMaterialEarbudsBatteryFilled;
