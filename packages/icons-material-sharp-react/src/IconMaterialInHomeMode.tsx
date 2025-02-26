import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInHomeMode = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InHomeMode'

      short_name='InHomeMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-510ZM160-160v-375l-72 55-47-63 439-337 440 336-48 64-392-300-240 184v356h120v80H160Zm437 80L428-250l56-57 113 113 227-226 56 57L597-80Z"/>
    </Icon>
  );
});

IconMaterialInHomeMode.displayName = 'OnesyIconMaterialInHomeMode';

export default IconMaterialInHomeMode;
