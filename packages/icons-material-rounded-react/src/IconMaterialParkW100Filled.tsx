import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialParkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkW100Filled'

      short_name='Park'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M452-292H274q-17.5 0-26.25-16t1.25-31l129-193h-20q-18.38 0-27.19-16-8.81-16 2.19-31l122-176q5-7 11.75-10t13.5-3q6.75 0 13.25 3t11.5 10l122 176q11 15 2.19 31T602-532h-20l129 193q10 15 1.25 31T686-292H508v134q0 11.05-7.48 18.52Q493.05-132 482-132q-12.75 0-21.37-8.63Q452-149.25 452-162v-130Z"/>
    </Icon>
  );
});

IconMaterialParkW100Filled.displayName = 'OnesyIconMaterialParkW100Filled';

export default IconMaterialParkW100Filled;
