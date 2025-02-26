import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMinimizeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MinimizeW100Filled'

      short_name='Minimize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M266-172v-28h428v28H266Z"/>
    </Icon>
  );
});

IconMaterialMinimizeW100Filled.displayName = 'OnesyIconMaterialMinimizeW100Filled';

export default IconMaterialMinimizeW100Filled;
