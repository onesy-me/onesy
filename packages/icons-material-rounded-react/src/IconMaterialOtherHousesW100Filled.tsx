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
      <path d="M212-232v-303l-68 53q-5 4-10 3t-9-6q-4-5-3.5-10t5.5-9l316-243q8.34-6 17.81-9 9.48-3 19.34-3 9.85 0 18.88 3t16.97 9l317 243q5 4 5.5 9t-3.5 10.19q-4 4.81-9 5.81t-10-3l-68-53v303q0 24.75-17.62 42.37Q712.75-172 688-172H272q-24.75 0-42.37-17.63Q212-207.25 212-232Zm108-140q11 0 19.5-8.5T348-400q0-11-8.5-19.5T320-428q-11 0-19.5 8.5T292-400q0 11 8.5 19.5T320-372Zm160 0q11 0 19.5-8.5T508-400q0-11-8.5-19.5T480-428q-11 0-19.5 8.5T452-400q0 11 8.5 19.5T480-372Zm160 0q11 0 19.5-8.5T668-400q0-11-8.5-19.5T640-428q-11 0-19.5 8.5T612-400q0 11 8.5 19.5T640-372Z"/>
    </Icon>
  );
});

IconMaterialOtherHousesW100Filled.displayName = 'OnesyIconMaterialOtherHousesW100Filled';

export default IconMaterialOtherHousesW100Filled;
