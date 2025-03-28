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
      <path d="M132-688q0-26 17-43t43-17h576q26 0 43 17t17 43v100q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-100q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v100q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-100Zm60 476q-26 0-43-17t-17-43v-100q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v100q0 12 10 22t22 10h576q12 0 22-10t10-22v-100q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v100q0 26-17 43t-43 17H192Zm208.02-94q3.98 0 7.58-2t5.4-6l147-294 67 134q1.81 4 5.42 6t7.58 2h174q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H649l-76-152q-1.6-3.3-4.8-4.65-3.2-1.35-7.7-1.35t-8.1 1.35q-3.6 1.35-5.4 4.65L400-352l-67-134q-1.81-4-5.42-6t-7.58-2H146q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h165l76 152q1.81 4 5.43 6 3.61 2 7.59 2ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartW100.displayName = 'OnesyIconMaterialMonitorHeartW100';

export default IconMaterialMonitorHeartW100;
