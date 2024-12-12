import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCampingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampingW100Filled'

      short_name='Camping'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-106v-144l331-445-38-50 23-17 32 44 33-44 22 17-37 50 330 445v144H132Zm179-28h338L480-371 311-134Z"/>
    </Icon>
  );
});

IconMaterialCampingW100Filled.displayName = 'OnesyIconMaterialCampingW100Filled';

export default IconMaterialCampingW100Filled;
