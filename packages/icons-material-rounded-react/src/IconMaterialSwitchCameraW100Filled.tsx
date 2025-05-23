import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraW100Filled'

      short_name='SwitchCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h116l56-61q8-9 19.5-14t24.5-5h144q13 0 24.5 5t19.5 14l56 61h116q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm134-252h308l-80 80q-4 4-4.5 9.5T554-324q5 5 10 5t10-5l93-93q9-9 9-21t-9-21l-93-93q-4-4-9.5-4.5T554-552q-5 5-5 10t5 10l80 80H326l80-80q4-4 4.5-9.5T406-552q-5-5-10-5t-10 5l-93 93q-9 9-9 21t9 21l93 93q4 4 9.5 4.5T406-324q5-5 5-10t-5-10l-80-80Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraW100Filled.displayName = 'OnesyIconMaterialSwitchCameraW100Filled';

export default IconMaterialSwitchCameraW100Filled;
