import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPresentToAllW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PresentToAllW100'

      short_name='PresentToAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-356h28v-194l90 90 20-20-124-124-124 124 20 20 90-90v194ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialPresentToAllW100.displayName = 'OnesyIconMaterialPresentToAllW100';

export default IconMaterialPresentToAllW100;
