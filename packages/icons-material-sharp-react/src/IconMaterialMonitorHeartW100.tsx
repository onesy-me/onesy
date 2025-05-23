import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorHeartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartW100'

      short_name='MonitorHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-574v-174h696v174h-28v-146H160v146h-28Zm0 362v-174h28v146h640v-146h28v174H132Zm179-254 76 151h26l147-293 71 142h197v-28H649l-76-151h-26L400-352l-71-142H132v28h179Zm169-14Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartW100.displayName = 'OnesyIconMaterialMonitorHeartW100';

export default IconMaterialMonitorHeartW100;
