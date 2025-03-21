import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvRemoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvRemoteW100Filled'

      short_name='TvRemote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM332-92v-776h296v776H332Zm148-341q-19.58 0-33.29-13.71T433-480q0-19.58 13.71-33.29T480-527q19.58 0 33.29 13.71T527-480q0 19.58-13.71 33.29T480-433Zm-.04-301q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialTvRemoteW100Filled.displayName = 'OnesyIconMaterialTvRemoteW100Filled';

export default IconMaterialTvRemoteW100Filled;
