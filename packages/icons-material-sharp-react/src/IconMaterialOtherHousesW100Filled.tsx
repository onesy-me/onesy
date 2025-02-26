import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOtherHousesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OtherHousesW100Filled'

      short_name='OtherHouses'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-172v-363l-79 61-17-22 364-279 364 279-17 22-79-61v363H212Zm108-200q-11 0-19.5-8.5T292-400q0-11 8.5-19.5T320-428q11 0 19.5 8.5T348-400q0 11-8.5 19.5T320-372Zm160 0q-11 0-19.5-8.5T452-400q0-11 8.5-19.5T480-428q11 0 19.5 8.5T508-400q0 11-8.5 19.5T480-372Zm160 0q-11 0-19.5-8.5T612-400q0-11 8.5-19.5T640-428q11 0 19.5 8.5T668-400q0 11-8.5 19.5T640-372Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesW100Filled.displayName = 'OnesyIconMaterialOtherHousesW100Filled';

export default IconMaterialOtherHousesW100Filled;
