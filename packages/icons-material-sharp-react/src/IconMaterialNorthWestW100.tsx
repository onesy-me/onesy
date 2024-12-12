import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNorthWestW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWestW100'

      short_name='NorthWest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-212 280-660v300h-28v-348h348v28H300l448 448-20 20Z"/>
    </Icon>
  );
});

IconMaterialNorthWestW100.displayName = 'OnesyIconMaterialNorthWestW100';

export default IconMaterialNorthWestW100;
