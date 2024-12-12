import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOpenInBrowserFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OpenInBrowserFilled'

      short_name='OpenInBrowser'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H600v-80h160v-480H200v480h160v80H120Zm320 0v-246l-64 64-56-58 160-160 160 160-56 58-64-64v246h-80Z"/>
    </Icon>
  );
});

IconMaterialOpenInBrowserFilled.displayName = 'OnesyIconMaterialOpenInBrowserFilled';

export default IconMaterialOpenInBrowserFilled;
