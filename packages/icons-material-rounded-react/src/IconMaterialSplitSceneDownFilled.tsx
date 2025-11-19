import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSplitSceneDownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SplitSceneDownFilled'

      short_name='SplitSceneDown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-800q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v160q0 17-11.5 28.5T760-600H200q-17 0-28.5-11.5T160-640v-160ZM80-480q0-17 11.5-28.5T120-520h720q17 0 28.5 11.5T880-480q0 17-11.5 28.5T840-440h-40v280q0 33-23.5 56.5T720-80H240q-33 0-56.5-23.5T160-160v-280h-40q-17 0-28.5-11.5T80-480Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneDownFilled.displayName = 'OnesyIconMaterialSplitSceneDownFilled';

export default IconMaterialSplitSceneDownFilled;
