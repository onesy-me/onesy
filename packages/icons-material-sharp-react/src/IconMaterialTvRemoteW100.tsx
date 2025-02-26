import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTvRemoteW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvRemoteW100'

      short_name='TvRemote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120h240v-273q-20 28-51.5 44.5T480-332q-37 0-68.5-16.5T360-393v273Zm120-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM360-567q20-28 51.5-44.5T480-628q37 0 68.5 16.5T600-567v-273H360v273ZM332-92v-776h296v776H332Zm148-341q-19.58 0-33.29-13.71T433-480q0-19.58 13.71-33.29T480-527q19.58 0 33.29 13.71T527-480q0 19.58-13.71 33.29T480-433Zm-.04-301q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Zm.04 402Zm0-296Z"/>
    </Icon>
  );
});

IconMaterialTvRemoteW100.displayName = 'OnesyIconMaterialTvRemoteW100';

export default IconMaterialTvRemoteW100;
