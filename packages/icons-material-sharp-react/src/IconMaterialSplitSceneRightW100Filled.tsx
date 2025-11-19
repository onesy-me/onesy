import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneRightW100Filled'

      short_name='SplitSceneRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h234v536H132Zm334 80v-696h28v80h334v536H494v80h-28Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneRightW100Filled.displayName = 'OnesyIconMaterialSplitSceneRightW100Filled';

export default IconMaterialSplitSceneRightW100Filled;
