import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeHealthW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeHealthW100Filled'

      short_name='HomeHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-306h68v-100h100v-68H514v-100h-68v100H346v68h100v100ZM212-172v-402l268-202 268 202v402H212Z"/>
    </Icon>
  );
});

IconMaterialHomeHealthW100Filled.displayName = 'OnesyIconMaterialHomeHealthW100Filled';

export default IconMaterialHomeHealthW100Filled;
