import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindow'

      short_name='SensorWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-800h640v800H160Zm80-440h160v-40h160v40h160v-280H240v280Zm0 80v280h480v-280H240Zm0 280h480-480Z"/>
    </Icon>
  );
});

IconMaterialSensorWindow.displayName = 'OnesyIconMaterialSensorWindow';

export default IconMaterialSensorWindow;
