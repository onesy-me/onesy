import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneRightFilled'

      short_name='SplitSceneRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h280v640H80Zm360 80v-800h80v80h360v640H520v80h-80Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneRightFilled.displayName = 'OnesyIconMaterialSplitSceneRightFilled';

export default IconMaterialSplitSceneRightFilled;
