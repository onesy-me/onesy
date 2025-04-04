import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMonitorHeartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartW100Filled'

      short_name='MonitorHeart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-164q0-13 8.5-21.5T162-466h149l76 152q2 4 5.5 6t7.5 2q4 0 7.5-2t5.5-6l147-294 67 134q2 4 5.5 6t7.5 2h158q13 0 21.5 8.5T828-436v164q0 26-17 43t-43 17H192Zm-60-476q0-26 17-43t43-17h576q26 0 43 17t17 43v164q0 13-8.5 21.5T798-494H649l-76-152q-2-3-5-4.5t-8-1.5q-4 0-7.5 1.5T547-646L400-352l-67-134q-2-4-5.5-6t-7.5-2H162q-13 0-21.5-8.5T132-524v-164Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartW100Filled.displayName = 'OnesyIconMaterialMonitorHeartW100Filled';

export default IconMaterialMonitorHeartW100Filled;
