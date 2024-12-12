import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInputW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InputW100Filled'

      short_name='Input'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-134h28v106h640v-480H160v106h-28v-134h696v536H132Zm348-144-20-20 90-90H132v-28h418l-90-90 20-20 124 124-124 124Z"/>
    </Icon>
  );
});

IconMaterialInputW100Filled.displayName = 'OnesyIconMaterialInputW100Filled';

export default IconMaterialInputW100Filled;
