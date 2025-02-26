import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowSensorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensorW100'

      short_name='WindowSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M853.96-600q-5.96 0-9.96-4.03-4-4.02-4-9.97v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM172-172v-616h536v616H172Zm28-322h212v-28h56v28h212v-266H200v266Zm0 294h480v-266H200v266Zm0 0h480-480Z"/>
    </Icon>
  );
});

IconMaterialWindowSensorW100.displayName = 'OnesyIconMaterialWindowSensorW100';

export default IconMaterialWindowSensorW100;
