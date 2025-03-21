import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightlifeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightlifeFilled'

      short_name='Nightlife'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240v-160L81-698q-14-20-2-41t36-21h410q24 0 36 21t-2 41L360-400v160h40q17 0 28.5 11.5T440-200q0 17-11.5 28.5T400-160H240q-17 0-28.5-11.5T200-200q0-17 11.5-28.5T240-240h40Zm-44-360h168l56-80H180l56 80Zm404 440q-50 0-85-35t-35-85q0-50 35-85t85-35q11 0 21 1.5t19 6.5v-328q0-17 11.5-28.5T720-760h100q25 0 42.5 17.5T880-700q0 25-17.5 42.5T820-640h-60v360q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialNightlifeFilled.displayName = 'OnesyIconMaterialNightlifeFilled';

export default IconMaterialNightlifeFilled;
