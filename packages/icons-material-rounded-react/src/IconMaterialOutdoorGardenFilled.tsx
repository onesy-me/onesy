import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutdoorGardenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutdoorGardenFilled'

      short_name='OutdoorGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120h240v-600L200-840 80-720v600Zm280 0h240v-600L480-840 360-720v600Zm280 0h240v-600L760-840 640-720v600Z"/>
    </Icon>
  );
});

IconMaterialOutdoorGardenFilled.displayName = 'OnesyIconMaterialOutdoorGardenFilled';

export default IconMaterialOutdoorGardenFilled;
