import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightClassW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassW100'

      short_name='FlightClass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M512-492v-256h156v256H512Zm28-28h100v-200H540v200Zm128 228H352L252-637v-111h28v108l94 320h294v28ZM341-172v-28h326v28H341Zm199-548h100-100Z"/>
    </Icon>
  );
});

IconMaterialFlightClassW100.displayName = 'OnesyIconMaterialFlightClassW100';

export default IconMaterialFlightClassW100;
