import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPresentToAllW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllW100Filled'

      short_name='PresentToAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-356h28v-194l90 90 20-20-124-124-124 124 20 20 90-90v194ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllW100Filled.displayName = 'OnesyIconMaterialPresentToAllW100Filled';

export default IconMaterialPresentToAllW100Filled;
