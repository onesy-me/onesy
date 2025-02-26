import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorWindowW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindowW100'

      short_name='SensorWindow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-133v-694h536v694H212Zm28-361h186v-28h108v28h186v-305H240v305Zm0 28v305h480v-305H240Zm0 305h480-480Z"/>
    </Icon>
  );
});

IconMaterialSensorWindowW100.displayName = 'OnesyIconMaterialSensorWindowW100';

export default IconMaterialSensorWindowW100;
