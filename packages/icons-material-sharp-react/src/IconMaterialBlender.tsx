import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlender = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Blender'

      short_name='Blender'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80v-190l74-84-25-166H120v-320h280v-40h160v40h159l-73 486 74 84v190H240Zm37-520-24-160h-53v160h77Zm203 400q17 0 28.5-11.5T520-240q0-17-11.5-28.5T480-280q-17 0-28.5 11.5T440-240q0 17 11.5 28.5T480-200Zm-92-200h184l54-360H334l54 360Zm-68 240h320v-80l-71-80H391l-71 80v80Zm160-80Z"/>
    </Icon>
  );
});

IconMaterialBlender.displayName = 'OnesyIconMaterialBlender';

export default IconMaterialBlender;
