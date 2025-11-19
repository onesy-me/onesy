import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTooltip2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tooltip2'

      short_name='Tooltip2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80Zm-80 400q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H587l-74 110q-6 9-14.5 13.5T480-112q-10 0-18.5-4.5T447-130l-74-110H160Zm320 16 64-96h256v-480H160v480h256l64 96Zm0-336Z"/>
    </Icon>
  );
});

IconMaterialTooltip2.displayName = 'OnesyIconMaterialTooltip2';

export default IconMaterialTooltip2;
