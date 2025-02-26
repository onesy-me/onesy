import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHomeHealthW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeHealthW100'

      short_name='HomeHealth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-306h68v-100h100v-68H514v-100h-68v100H346v68h100v100ZM212-172v-402l268-202 268 202v402H212Zm28-28h480v-360L480-740 240-560v360Zm240-270Z"/>
    </Icon>
  );
});

IconMaterialHomeHealthW100.displayName = 'OnesyIconMaterialHomeHealthW100';

export default IconMaterialHomeHealthW100;
