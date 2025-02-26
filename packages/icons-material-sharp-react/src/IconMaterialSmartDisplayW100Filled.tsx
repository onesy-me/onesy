import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSmartDisplayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayW100Filled'

      short_name='SmartDisplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m406-348 206-132-206-132v264ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayW100Filled.displayName = 'OnesyIconMaterialSmartDisplayW100Filled';

export default IconMaterialSmartDisplayW100Filled;
