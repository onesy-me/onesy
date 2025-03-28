import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerShadesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RollerShadesW100'

      short_name='RollerShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H132Zm108-317h480v-271H240v271Zm0 289h480v-261H494v116q11 5 17.5 14t6.5 21q0 15.74-11.18 26.87t-27 11.13Q464-272 453-283.13T442-310q0-12 6.5-21t17.5-14v-116H240v261Zm0-560h480-480Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesW100.displayName = 'OnesyIconMaterialRollerShadesW100';

export default IconMaterialRollerShadesW100;
