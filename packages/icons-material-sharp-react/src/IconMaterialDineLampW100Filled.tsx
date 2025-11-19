import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDineLampW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DineLampW100Filled'

      short_name='DineLamp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M157-172v-133h-25L92-645h29l33 265h222v75h-28v133h-27v-133H185v133h-28Zm309 0v-308H240v-28h480v28H494v308h-28Zm148 0v-133h-30v-75h222l34-265h29l-41 340h-22v133h-28v-133H641v133h-27ZM316-608v-27q0-52 44-82.5T461-748h5v-120h28v120h6q57 0 101 30.5t44 82.5v27H316Z"/>
    </Icon>
  );
});

IconMaterialDineLampW100Filled.displayName = 'OnesyIconMaterialDineLampW100Filled';

export default IconMaterialDineLampW100Filled;
