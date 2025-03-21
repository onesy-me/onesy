import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsPowerW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsPowerW100Filled'

      short_name='SettingsPower'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-494v-286q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v286q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm14.16 242Q368-252 290-329.89 212-407.77 212-520q0-65 29-121t80-95q5-4 11.5-4.5T344-736q5 5 3 10.5t-7 9.5q-46 35-73 86.5T240-520q0 100 70 170t170 70q100 0 170-70t70-170q0-59.21-26.5-110.61Q667-682 620-716q-5-4-6.5-9.95-1.5-5.96 2.5-10.05 4.78-4.64 11.39-4.82Q634-741 639-736q50 41 79.5 96.5T748-520q0 112.23-77.84 190.11-77.84 77.89-190 77.89ZM320-12q-11 0-19.5-8.5T292-40q0-11 8.5-19.5T320-68q11 0 19.5 8.5T348-40q0 11-8.5 19.5T320-12Zm160 0q-11 0-19.5-8.5T452-40q0-11 8.5-19.5T480-68q11 0 19.5 8.5T508-40q0 11-8.5 19.5T480-12Zm160 0q-11 0-19.5-8.5T612-40q0-11 8.5-19.5T640-68q11 0 19.5 8.5T668-40q0 11-8.5 19.5T640-12Z"/>
    </Icon>
  );
});

IconMaterialSettingsPowerW100Filled.displayName = 'OnesyIconMaterialSettingsPowerW100Filled';

export default IconMaterialSettingsPowerW100Filled;
