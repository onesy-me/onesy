import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayW100Filled'

      short_name='Airplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M368-172q-10.73 0-16.87-7.28Q345-186.57 345-195q0-3.57 1.56-7.5 1.55-3.93 5.44-7.5l107-107q5-5 10.5-7t11-2q5.5 0 10.5 2t10 7l107 107q3.89 3.59 5.44 7.55 1.56 3.95 1.56 7.54 0 7.91-6.13 15.41-6.14 7.5-16.87 7.5H368ZM192-788h576q24.75 0 42.38 17.62Q828-752.75 828-728v416q0 24.75-17.62 42.37Q792.75-252 768-252h-35q-12.44 0-23.72-5T690-270L544-416q-12.79-13.11-29.34-20.06-16.55-6.94-34.6-6.94-18.06 0-34.65 6.94Q428.82-429.11 416-416L270-270q-8 8-19.28 13-11.28 5-23.72 5h-35q-24.75 0-42.37-17.63Q132-287.25 132-312v-416q0-24.75 17.63-42.38Q167.25-788 192-788Z"/>
    </Icon>
  );
});

IconMaterialAirplayW100Filled.displayName = 'OnesyIconMaterialAirplayW100Filled';

export default IconMaterialAirplayW100Filled;
