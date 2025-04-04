import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplayW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplayW100'

      short_name='Airplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-312v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 24.75-17.62 42.37Q792.75-252 768-252h-74q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h74q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10h74q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4h-74q-24.75 0-42.37-17.63Q132-287.25 132-312Zm236 140q-10.73 0-16.87-7.28Q345-186.57 345-195q0-3.57 1.56-7.5 1.55-3.93 5.44-7.5l107-107q5-5 10.5-7t11-2q5.5 0 10.5 2t10 7l107 107q3.89 3.59 5.44 7.55 1.56 3.95 1.56 7.54 0 7.91-6.13 15.41-6.14 7.5-16.87 7.5H368Zm112-334Z"/>
    </Icon>
  );
});

IconMaterialAirplayW100.displayName = 'OnesyIconMaterialAirplayW100';

export default IconMaterialAirplayW100;
