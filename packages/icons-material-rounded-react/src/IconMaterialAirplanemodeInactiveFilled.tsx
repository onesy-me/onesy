import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplanemodeInactiveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirplanemodeInactiveFilled'

      short_name='AirplanemodeInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 370-89q-11 3-20.5-4t-9.5-19v-16q0-6 2.5-10.5t7.5-8.5l70-53v-220l-296 87q-17 5-30.5-5.5T80-366v-14q0-9 4.5-17T97-410l215-126L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L540-308v108l69 51q5 4 8 10t3 13v8q0 14-11.5 22.5T583-91l-103-29Zm0-760q25 0 42.5 17.5T540-820v220l321 189q9 5 14 13.5t5 19.5v7q0 20-15 31t-34 6l-129-39-282-281v-166q0-25 17.5-42.5T480-880Z"/>
    </Icon>
  );
});

IconMaterialAirplanemodeInactiveFilled.displayName = 'OnesyIconMaterialAirplanemodeInactiveFilled';

export default IconMaterialAirplanemodeInactiveFilled;
