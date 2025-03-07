import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRMobiledataW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RMobiledataW100'

      short_name='RMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-666v92q0 6-4 10t-10 4q-6 0-10-4t-4-10v-224q0-13 8.5-21.5T162-828h138q26 0 43 17t17 43v48q0 17-15 33t-37 19l38 89q3 7-1 13t-12 6q-4 0-7.5-2t-5.5-6l-42-98H160Zm0-28h140q14 0 23-9t9-23v-42q0-14-9-23t-23-9H160v106Z"/>
    </Icon>
  );
});

IconMaterialRMobiledataW100.displayName = 'OnesyIconMaterialRMobiledataW100';

export default IconMaterialRMobiledataW100;
