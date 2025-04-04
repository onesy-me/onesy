import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial30fpsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='30fpsW100Filled'

      short_name='30fps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M334-246H140q-6 0-10-4t-4-10q0-6 4-10t10-4h194q14 0 23-9t9-23v-128q0-14-9-23t-23-9H140q-6 0-10-4t-4-10q0-6 4-10t10-4h194q14 0 23-9t9-23v-128q0-14-9-23t-23-9H140q-6 0-10-4t-4-10q0-6 4-10t10-4h194q26 0 43 17t17 43v136q0 14-10 26t-21 12q11 0 21 12t10 26v136q0 26-17 43t-43 17Zm252-28h188q14 0 23-9t9-23v-348q0-14-9-23t-23-9H586q-14 0-23 9t-9 23v348q0 14 9 23t23 9Zm0 28q-26 0-43-17t-17-43v-348q0-26 17-43t43-17h188q26 0 43 17t17 43v348q0 26-17 43t-43 17H586Z"/>
    </Icon>
  );
});

IconMaterial30fpsW100Filled.displayName = 'OnesyIconMaterial30fpsW100Filled';

export default IconMaterial30fpsW100Filled;
