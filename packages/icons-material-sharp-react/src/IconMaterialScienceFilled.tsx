import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScienceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScienceFilled'

      short_name='Science'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-80v-80h400v80h-80v240l222 270q32 39 10.5 84.5T760-120H200Z"/>
    </Icon>
  );
});

IconMaterialScienceFilled.displayName = 'OnesyIconMaterialScienceFilled';

export default IconMaterialScienceFilled;
