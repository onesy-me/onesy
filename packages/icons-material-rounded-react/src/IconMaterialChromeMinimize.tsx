import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromeMinimize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChromeMinimize'

      short_name='ChromeMinimize'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M200 896q-17 0-28.5-11.5T160 856q0-17 11.5-28.5T200 816h560q17 0 28.5 11.5T800 856q0 17-11.5 28.5T760 896H200Z"/>
    </Icon>
  );
});

IconMaterialChromeMinimize.displayName = 'OnesyIconMaterialChromeMinimize';

export default IconMaterialChromeMinimize;
