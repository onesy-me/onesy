import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWbTwilightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WbTwilightW100'

      short_name='WbTwilight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M768-646q5 5 5 10t-5 10l-44 44q-4 4-9.5 4.5T704-582q-5-5-5-10t5-10l44-44q4-4 9.5-4.5T768-646ZM120-186q-6 0-10-4t-4-10q0-6 4-10t10-4h720q6 0 10 4t4 10q0 6-4 10t-10 4H120Zm360-570q6 0 10 4t4 10v60q0 6-4 10t-10 4q-6 0-10-4t-4-10v-60q0-6 4-10t10-4ZM192-646q5-5 10-5t10 5l44 44q4 4 4.5 9.5T256-582q-5 5-10 5t-10-5l-44-44q-4-4-4.5-9.5T192-646Zm105 246h366q-23-54-72.5-87T480-520q-61 0-110.5 33T297-400Zm-39 28q18-78 80-127t142-49q80 0 142 49t80 127H258Zm222-28Z"/>
    </Icon>
  );
});

IconMaterialWbTwilightW100.displayName = 'OnesyIconMaterialWbTwilightW100';

export default IconMaterialWbTwilightW100;
