import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestCamOutdoorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamOutdoorW100Filled'

      short_name='NestCamOutdoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M549-237q-15 19-39 20.5T467-230L324-350q-24-20-42-45t-26-55q-9 14-22.5 22t-29.5 8h-58v-252h58q27 0 44.5 21t17.5 50q26-58 80-90.5T464-724q36 0 69 13t61 36l144 120q19 16 21 39.5T745-473L549-237Z"/>
    </Icon>
  );
});

IconMaterialNestCamOutdoorW100Filled.displayName = 'OnesyIconMaterialNestCamOutdoorW100Filled';

export default IconMaterialNestCamOutdoorW100Filled;
