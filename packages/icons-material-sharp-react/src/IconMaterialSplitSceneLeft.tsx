import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneLeft = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneLeft'

      short_name='SplitSceneLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-160v-80h200v-480H600v-80h280v640H600ZM440-80v-80H80v-640h360v-80h80v800h-80Zm360-640v480-480Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneLeft.displayName = 'OnesyIconMaterialSplitSceneLeft';

export default IconMaterialSplitSceneLeft;
