import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnergySavingsLeafW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergySavingsLeafW100Filled'

      short_name='EnergySavingsLeaf'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m435-337 153-137-9-25-113-10 74-100-14-16-152 137 8 26 113 10-73 100 13 15Zm46 125q-52.03 0-98.01-18.5Q337-249 300.59-281L226-206l-20-20 75-74.59q-32-36.41-50.5-82.4Q212-428.97 212-481q0-111.81 78.5-189.4Q369-748 480.86-748H748v267.14Q748-369 670.4-290.5 592.81-212 481-212Z"/>
    </Icon>
  );
});

IconMaterialEnergySavingsLeafW100Filled.displayName = 'OnesyIconMaterialEnergySavingsLeafW100Filled';

export default IconMaterialEnergySavingsLeafW100Filled;
