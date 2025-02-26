import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlashOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOn'

      short_name='FlashOn'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 10h-4l3-8H7v11h3v9z"/>
    </Icon>
  );
});

IconMaterialFlashOn.displayName = 'OnesyIconMaterialFlashOn';

export default IconMaterialFlashOn;
