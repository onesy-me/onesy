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
      <path d="M272-133q-26 0-43-17t-17-43v-574q0-26 17-43t43-17h416q26 0 43 17t17 43v574q0 26-17 43t-43 17H272Zm-32-361h186v-28h108v28h186v-273q0-12-10-22t-22-10H272q-12 0-22 10t-10 22v273Zm0 28v273q0 12 10 22t22 10h416q12 0 22-10t10-22v-273H240Zm0 305h480-480Z"/>
    </Icon>
  );
});

IconMaterialSensorWindowW100.displayName = 'OnesyIconMaterialSensorWindowW100';

export default IconMaterialSensorWindowW100;
