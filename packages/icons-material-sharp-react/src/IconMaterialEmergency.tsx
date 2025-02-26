import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergency = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Emergency'

      short_name='Emergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M410-120v-238L204-239l-70-121 206-120-206-119 70-121 206 119v-239h140v239l206-119 70 121-206 119 206 120-70 121-206-119v238H410Z"/>
    </Icon>
  );
});

IconMaterialEmergency.displayName = 'OnesyIconMaterialEmergency';

export default IconMaterialEmergency;
