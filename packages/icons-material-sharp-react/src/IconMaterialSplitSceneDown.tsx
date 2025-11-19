import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneDown = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneDown'

      short_name='SplitSceneDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-600v-280h640v280h-80v-200H240v200h-80Zm0 520v-360H80v-80h800v80h-80v360H160Zm80-720h480-480Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneDown.displayName = 'OnesyIconMaterialSplitSceneDown';

export default IconMaterialSplitSceneDown;
