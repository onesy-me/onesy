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
      <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM480-80 373-240H80v-640h800v640H587L480-80Zm0-144 64-96h256v-480H160v480h256l64 96Zm0-336Z"/>
    </Icon>
  );
});

IconMaterialTooltip2.displayName = 'OnesyIconMaterialTooltip2';

export default IconMaterialTooltip2;
