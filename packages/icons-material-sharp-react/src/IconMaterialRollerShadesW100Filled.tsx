import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerShadesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesW100Filled'

      short_name='RollerShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H132Zm108-28h480v-261H494v116q11 5 17.5 14t6.5 21q0 15.74-11.18 26.87t-27 11.13Q464-272 453-283.13T442-310q0-12 6.5-21t17.5-14v-116H240v261Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesW100Filled.displayName = 'OnesyIconMaterialRollerShadesW100Filled';

export default IconMaterialRollerShadesW100Filled;
