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
      <path d="M480-120 340-80v-60l80-60v-220L80-320v-80l232-136L56-792l56-56 736 736-56 56-252-252v108l80 60v60l-140-40Zm0-760q25 0 42.5 17.5T540-820v220l340 200v80l-178-53-282-281v-166q0-25 17.5-42.5T480-880Z"/>
    </Icon>
  );
});

IconMaterialAirplanemodeInactiveFilled.displayName = 'OnesyIconMaterialAirplanemodeInactiveFilled';

export default IconMaterialAirplanemodeInactiveFilled;
