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
      <path d="M160-600v-280h640v280H160Zm0 520v-360H80v-80h800v80h-80v360H160Z"/>
    </Icon>
  );
});

IconMaterialSplitSceneDownFilled.displayName = 'OnesyIconMaterialSplitSceneDownFilled';

export default IconMaterialSplitSceneDownFilled;
