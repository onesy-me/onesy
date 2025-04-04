import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFamilyHomeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FamilyHomeW100Filled'

      short_name='FamilyHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-304q5 0 10-1.5t9.11-5.03Q521-331 540.5-350t34.46-37.21q14.95-18.21 24-35.41Q608-439.81 608-456q0-30.2-20.62-50.1-20.63-19.9-49.5-19.9-17.88 0-32.38 7.5Q491-511 480-500q-9-11-24-18.5t-31.57-7.5q-29 0-49.72 19.79Q354-486.41 354-456.38q0 16.38 8.5 33.88Q371-405 386-387t34.33 37.11Q439.67-330.79 461-311q4 4 9 5.5t10 1.5ZM272-172q-24.75 0-42.37-17.63Q212-207.25 212-232v-303l-68 53q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9l316-243q8.34-6 17.81-9 9.48-3 19.34-3 9.85 0 18.88 3t16.97 9l317 243q5 4 5.5 9t-3.5 10.19q-4 4.81-9 5.81t-10-3l-68-53v303q0 24.75-17.62 42.37Q712.75-172 688-172H272Z"/>
    </Icon>
  );
});

IconMaterialFamilyHomeW100Filled.displayName = 'OnesyIconMaterialFamilyHomeW100Filled';

export default IconMaterialFamilyHomeW100Filled;
