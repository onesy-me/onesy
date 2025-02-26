import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGirlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GirlW100Filled'

      short_name='Girl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.8-660q-20.8 0-35.3-14.7-14.5-14.7-14.5-35.5t14.7-35.3q14.7-14.5 35.5-14.5t35.3 14.7q14.5 14.7 14.5 35.5t-14.7 35.3Q500.6-660 479.8-660ZM434-244v-120h-23q-16 0-24.5-13t-3.5-27l64-189q4-11 12.86-17t20-6q11.14 0 20.14 6t13 17l64 189q5 14-3.5 27T549-364h-23v120q0 12.75-8.62 21.37Q508.75-214 496-214h-32q-12.75 0-21.37-8.63Q434-231.25 434-244Z"/>
    </Icon>
  );
});

IconMaterialGirlW100Filled.displayName = 'OnesyIconMaterialGirlW100Filled';

export default IconMaterialGirlW100Filled;
