import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRectangleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RectangleW100Filled'

      short_name='Rectangle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialRectangleW100Filled.displayName = 'OnesyIconMaterialRectangleW100Filled';

export default IconMaterialRectangleW100Filled;
