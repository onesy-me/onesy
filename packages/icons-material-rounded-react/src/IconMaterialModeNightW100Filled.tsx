import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialModeNightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeNightW100Filled'

      short_name='ModeNight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-132q-12.33 0-24.67-.5Q317-133 305-135q-10-2-16-10.13-6-8.12-6-17.87 0-5.4 1.5-10.2 1.5-4.8 5.5-8.8 55-63 85.5-139T406-480q0-83-31-158.5T290-777q-4-4-5.5-8.8-1.5-4.8-1.5-10.2 0-11 6-19t16-10q12-2 24.33-2.5 12.34-.5 24.67-.5 72.21 0 135.72 27.39 63.51 27.39 110.49 74.35 46.98 46.96 74.38 110.43Q702-552.35 702-480.17q0 72.17-27.41 135.73-27.4 63.56-74.38 110.57-46.98 47.02-110.49 74.44Q426.21-132 354-132Z"/>
    </Icon>
  );
});

IconMaterialModeNightW100Filled.displayName = 'OnesyIconMaterialModeNightW100Filled';

export default IconMaterialModeNightW100Filled;
