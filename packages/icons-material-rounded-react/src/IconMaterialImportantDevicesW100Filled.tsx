import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialImportantDevicesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ImportantDevicesW100Filled'

      short_name='ImportantDevices'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M652-172q-11 0-19.5-8.5T624-200v-282q0-11 8.5-19.5T652-510h148q11 0 19.5 8.5T828-482v282q0 11-8.5 19.5T800-172H652Zm0-68h148v-202H652v202ZM388.54-458.11 440-500l51.46 41.89q4.54 4.11 9.04 1.18 4.5-2.94 2.5-8.07l-19-67 55-45q4-3 2-8t-7.34-5H468l-21.36-60.81Q445-656 440-656t-6.64 5.19L412-590h-65.66q-5.34 0-7.34 5t2 8l55 45-19 67q-2 5.13 2.5 8.07 4.5 2.93 9.04-1.18ZM342-172q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h84v-132H192q-24.75 0-42.37-17.63Q132-367.25 132-392v-336q0-24.75 17.63-42.38Q167.25-788 192-788h496q24.75 0 42.38 17.62Q748-752.75 748-728v124q0 5.95-4.03 9.97Q739.95-590 734-590h-82q-45 0-76.5 31.5T544-482v136q0 5.95-4.03 9.98Q535.95-332 530-332h-76v132h84q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H342Z"/>
    </Icon>
  );
});

IconMaterialImportantDevicesW100Filled.displayName = 'OnesyIconMaterialImportantDevicesW100Filled';

export default IconMaterialImportantDevicesW100Filled;
