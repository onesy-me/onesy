import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraFrontOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffFilled'

      short_name='VideoCameraFrontOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M880-260 720-420v67L273-800h447v260l160-160v440ZM822-26 26-822l56-56L878-82l-56 56ZM160-800l560 560v80H80v-640h80Zm80 480h320v-22q0-44-44-71t-116-27q-72 0-116 27t-44 71v22Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffFilled.displayName = 'OnesyIconMaterialVideoCameraFrontOffFilled';

export default IconMaterialVideoCameraFrontOffFilled;
