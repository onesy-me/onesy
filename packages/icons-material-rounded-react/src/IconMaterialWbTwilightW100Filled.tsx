import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbTwilightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilightW100Filled'

      short_name='WbTwilight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M768-646q5 5 5 10t-5 10l-44 44q-4 4-9.5 4.5T704-582q-5-5-5-10t5-10l44-44q4-4 9.5-4.5T768-646ZM120-186q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h720q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H120Zm360.04-570q5.96 0 9.96 4.03 4 4.02 4 9.97v60q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-60q0-5.95 4.04-9.97 4.03-4.03 10-4.03ZM192-646q5-5 10-5t10 5l44 44q4 4 4.5 9.5t-4.5 10.72q-5 4.78-10 4.78t-10-5l-44-44q-4-4-4.5-9.5T192-646Zm66 274q18-78 80-127t142-49q80 0 142 49t80 127H258Z"/>
    </Icon>
  );
});

IconMaterialWbTwilightW100Filled.displayName = 'OnesyIconMaterialWbTwilightW100Filled';

export default IconMaterialWbTwilightW100Filled;
