import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCameraFrontOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraFrontOffW100Filled'

      short_name='VideoCameraFrontOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M806-350 696-460v90L318-748h378v248l110-110v260Zm-44 200L118-794l20-20 644 644-20 20ZM206-746l488 488v46H160v-534h46Zm95 390h248v-2q0-28-35.5-47T425-424q-53 0-88.5 19T301-358v2Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraFrontOffW100Filled.displayName = 'OnesyIconMaterialVideoCameraFrontOffW100Filled';

export default IconMaterialVideoCameraFrontOffW100Filled;
