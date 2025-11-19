import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTooltip2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Tooltip2Filled'

      short_name='Tooltip2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM480-80 373-240H80v-640h800v640H587L480-80Z"/>
    </Icon>
  );
});

IconMaterialTooltip2Filled.displayName = 'OnesyIconMaterialTooltip2Filled';

export default IconMaterialTooltip2Filled;
