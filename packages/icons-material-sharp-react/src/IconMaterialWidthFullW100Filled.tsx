import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthFullW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFullW100Filled'

      short_name='WidthFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h62v-480h-62v480Zm578 0h62v-480h-62v480Z"/>
    </Icon>
  );
});

IconMaterialWidthFullW100Filled.displayName = 'OnesyIconMaterialWidthFullW100Filled';

export default IconMaterialWidthFullW100Filled;
