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
      <path d="M354-828q72.21 0 135.72 27.39 63.51 27.39 110.49 74.35 46.98 46.96 74.38 110.43Q702-552.35 702-480.17q0 72.17-27.41 135.73-27.4 63.56-74.38 110.57-46.98 47.02-110.49 74.44Q426.21-132 354-132q-25.12 0-49.06-3T258-146q71-65 109.5-151.5T406-480q0-96-38.5-182.5T258-814q23-8 46.94-11 23.94-3 49.06-3Z"/>
    </Icon>
  );
});

IconMaterialModeNightW100Filled.displayName = 'OnesyIconMaterialModeNightW100Filled';

export default IconMaterialModeNightW100Filled;
