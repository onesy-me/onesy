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
      <path d="M212-200v-528q0-24.75 17.63-42.38Q247.25-788 272-788h416q24.75 0 42.38 17.62Q748-752.75 748-728v528h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66Zm28-289h480v-239q0-14-9-23t-23-9H272q-14 0-23 9t-9 23v239Zm0 289h480v-261H494v116q11 5 17.5 14t6.5 21q0 15.74-11.18 26.87t-27 11.13Q464-272 453-283.13T442-310q0-12 6.5-21t17.5-14v-116H240v261Zm0-560h480-480Z"/>
    </Icon>
  );
});

IconMaterialRollerShadesW100.displayName = 'OnesyIconMaterialRollerShadesW100';

export default IconMaterialRollerShadesW100;
