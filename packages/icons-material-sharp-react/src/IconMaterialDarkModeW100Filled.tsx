import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDarkModeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DarkModeW100Filled'

      short_name='DarkMode'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M483-172q-128.33 0-218.17-89.83Q175-351.67 175-480q0-113 71.5-197.5T425-783q-14 28-22 59t-8 64q0 111.67 78.17 189.83Q551.33-392 663-392q33 0 64-8t58-22q-20 107-104.5 178.5T483-172Z"/>
    </Icon>
  );
});

IconMaterialDarkModeW100Filled.displayName = 'OnesyIconMaterialDarkModeW100Filled';

export default IconMaterialDarkModeW100Filled;
