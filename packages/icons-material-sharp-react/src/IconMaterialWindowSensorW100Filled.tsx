import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowSensorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensorW100Filled'

      short_name='WindowSensor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M853.96-600q-5.96 0-9.96-4.03-4-4.02-4-9.97v-160q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v160q0 5.95-4.04 9.97-4.03 4.03-10 4.03ZM172-172v-616h536v616H172Zm56-322h184v-28h56v28h184v-238H228v238Zm0 266h424v-238H228v238Zm-28 28h480v-560H200v560Z"/>
    </Icon>
  );
});

IconMaterialWindowSensorW100Filled.displayName = 'OnesyIconMaterialWindowSensorW100Filled';

export default IconMaterialWindowSensorW100Filled;
