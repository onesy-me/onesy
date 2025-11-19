import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneW100Filled'

      short_name='SplitScene'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h234v536H132Zm334 80v-696h28v80h334v536H494v80h-28Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneW100Filled.displayName = 'OnesyIconMaterialSplitSceneW100Filled';

export default IconMaterialSplitSceneW100Filled;
