import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopMacFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacFilled'

      short_name='DesktopMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-40l80-80H80v-600h800v600H560l80 80v40H320Z"/>
    </Icon>
  );
});

IconMaterialDesktopMacFilled.displayName = 'OnesyIconMaterialDesktopMacFilled';

export default IconMaterialDesktopMacFilled;
