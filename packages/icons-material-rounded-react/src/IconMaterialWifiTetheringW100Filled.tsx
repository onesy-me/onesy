import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiTetheringW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiTetheringW100Filled'

      short_name='WifiTethering'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M251-197q-5 5-11 4t-11-6q-45-48-71-109t-26-132q0-72 27.5-135.5T234-686q47-47 110.5-74.5T480-788q72 0 135.5 27.5T726-686q47 47 74.5 110.5T828-440q0 70-26 131.5T731-199q-5 5-11 6t-11-4q-5-5-3.5-11.5T712-220q41-43 64.5-99T800-440q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 65 23 121t65 99q5 5 6.5 11.5T251-197Zm113-113q-5 5-10.5 4.5T343-311q-24-26-37.5-58.5T292-440q0-78 55-133t133-55q78 0 133 55t55 133q0 37-13.5 70T617-311q-5 5-10.5 5.5T596-310q-5-5-4.5-10t4.5-10q20-22 32-50t12-60q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 32 12 60t32 50q4 5 4.5 10t-4.5 10Zm116-102q-11 0-19.5-8.5T452-440q0-11 8.5-19.5T480-468q11 0 19.5 8.5T508-440q0 11-8.5 19.5T480-412Z"/>
    </Icon>
  );
});

IconMaterialWifiTetheringW100Filled.displayName = 'OnesyIconMaterialWifiTetheringW100Filled';

export default IconMaterialWifiTetheringW100Filled;
