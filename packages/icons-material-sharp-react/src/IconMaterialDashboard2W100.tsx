import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDashboard2W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dashboard2W100'

      short_name='Dashboard2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M610-212v-218h218v218H610ZM450-530v-218h378v218H450ZM132-212v-218h378v218H132Zm0-318v-218h218v218H132Zm346-28h322v-162H478v162ZM160-240h322v-162H160v162Zm478 0h162v-162H638v162ZM160-558h162v-162H160v162Zm318 0Zm4 156Zm156 0ZM322-558Z"/>
    </Icon>
  );
});

IconMaterialDashboard2W100.displayName = 'OnesyIconMaterialDashboard2W100';

export default IconMaterialDashboard2W100;
