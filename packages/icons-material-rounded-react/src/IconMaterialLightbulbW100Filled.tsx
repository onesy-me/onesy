import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLightbulbW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightbulbW100Filled'

      short_name='Lightbulb'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-124q-26 0-45.5-17T410-184h140q-5 26-24.5 43T480-124ZM360-264q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H360Zm-14-108q-53-36-83.5-89.5T232-580q0-104 72-176t176-72q104 0 176 72t72 176q0 65-30.5 118.5T614-372H346Z"/>
    </Icon>
  );
});

IconMaterialLightbulbW100Filled.displayName = 'OnesyIconMaterialLightbulbW100Filled';

export default IconMaterialLightbulbW100Filled;
