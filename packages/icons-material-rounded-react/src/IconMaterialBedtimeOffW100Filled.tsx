import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedtimeOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeOffW100Filled'

      short_name='BedtimeOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M543-548q57 57 128 90t151 41q17 2 24.5 18t-1.5 32q-14 25-27.5 43.5T790-291q-9 9-21.5 8.5T747-292L291-748q-8-8-8.5-19.5T290-787q14-15 31.5-30.5T363-850q14-11 30.5-3t18.5 26q7 79 40.5 150.5T543-548Zm225 429-96-96q-31 11-63 17t-65 6q-73 0-137-27.5T295-295q-48-48-75.5-112T192-544q0-32 6-63.5t18-63.5l-96-96q-4-5-4-10.5t4-9.5q5-5 10-5t10 5l648 648q5 4 5 9.5t-5 10.5q-5 5-10 5t-10-5Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOffW100Filled.displayName = 'OnesyIconMaterialBedtimeOffW100Filled';

export default IconMaterialBedtimeOffW100Filled;
