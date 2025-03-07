import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRealEstateAgent = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RealEstateAgent'

      short_name='RealEstateAgent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m558-144 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-57-19q-16-5-23-20t-2-31q5-16 19.5-23.5T450-346l42 14q17 5 38.5 8t58.5 4h11q0-11-6.5-21T578-354l-234-86h-64v220l278 76Zm-21 78-257-72q-8 26-31.5 42T200-80h-80q-33 0-56.5-23.5T40-160v-280q0-33 23.5-56.5T120-520h224q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87q0 22-11.5 34.5T833-145L583-67q-11 4-23 4t-23-3Zm-417-94h80v-280h-80v280Zm440-722q12 0 23.5 3.5T606-867l200 143q16 11 25 28t9 37v219q0 17-11.5 28.5T800-400q-17 0-28.5-11.5T760-440v-220L560-800 360-660v20q0 17-11.5 28.5T320-600q-17 0-28.5-11.5T280-640v-19q0-20 9-37t25-28l200-143q11-8 22.5-11.5T560-882Zm0 102Zm-40 140q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm80 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-80 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm80 0q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialRealEstateAgent.displayName = 'OnesyIconMaterialRealEstateAgent';

export default IconMaterialRealEstateAgent;
