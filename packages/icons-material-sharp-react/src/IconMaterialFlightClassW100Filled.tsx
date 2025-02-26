import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlightClassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassW100Filled'

      short_name='FlightClass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M512-492v-256h156v256H512Zm156 200H352L252-637v-111h28v108l94 320h294v28ZM341-172v-28h326v28H341Z"/>
    </Icon>
  );
});

IconMaterialFlightClassW100Filled.displayName = 'OnesyIconMaterialFlightClassW100Filled';

export default IconMaterialFlightClassW100Filled;
