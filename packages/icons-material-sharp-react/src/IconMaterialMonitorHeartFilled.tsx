import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorHeartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartFilled'

      short_name='MonitorHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-520v-280h800v280H665l-78-156h-54L400-410l-55-110H80Zm0 360v-280h215l78 156h54l133-266 55 110h265v280H80Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartFilled.displayName = 'OnesyIconMaterialMonitorHeartFilled';

export default IconMaterialMonitorHeartFilled;
