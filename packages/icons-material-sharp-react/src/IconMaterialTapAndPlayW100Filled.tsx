import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTapAndPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TapAndPlayW100Filled'

      short_name='TapAndPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-496v-372h456v776h-28v-654H280v250h-28Zm0 404v-48q19.8 0 33.9 14.1Q300-111.8 300-92h-48Zm148 0q0-62-43-105t-105-43v-28q73.33 0 124.67 51.33Q428-165.33 428-92h-28Zm128 0q0-115-80.5-195.5T252-368v-28q63.08 0 118.56 23.94 55.48 23.94 96.52 64.98 41.04 41.04 64.98 96.52Q556-155.08 556-92h-28Z"/>
    </Icon>
  );
});

IconMaterialTapAndPlayW100Filled.displayName = 'OnesyIconMaterialTapAndPlayW100Filled';

export default IconMaterialTapAndPlayW100Filled;
