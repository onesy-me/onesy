import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeveloperModeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeveloperModeW100'

      short_name='DeveloperMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m238-480 116 116q4 4 4.5 9.5T354-344q-5 5-10 5t-10-5L219-459q-9-9-9-21t9-21l115-115q4-4 9.5-4.5T354-616q5 5 5 10t-5 10L238-480Zm42 294v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-588h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm442 294L606-596q-4-4-4.5-9.5T606-616q5-5 10-5t10 5l115 115q9 9 9 21t-9 21L626-344q-4 4-9.5 4.5T606-344q-5-5-5-10t5-10l116-116ZM280-774v-66 66Zm0 588v66-66Zm32 94q-26 0-43-17t-17-43v-114q0-6 4-10t10-4q6 0 10 4t4 10v52h400v-52q0-6 4-10t10-4q6 0 10 4t4 10v114q0 26-17 43t-43 17H312Zm0-776h336q26 0 43 17t17 43v114q0 6-4 10t-10 4q-6 0-10-4t-4-10v-52H280v52q0 6-4 10t-10 4q-6 0-10-4t-4-10v-114q0-26 17-43t43-17Z"/>
    </Icon>
  );
});

IconMaterialDeveloperModeW100.displayName = 'OnesyIconMaterialDeveloperModeW100';

export default IconMaterialDeveloperModeW100;
