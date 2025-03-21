import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationsOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationsOffW100Filled'

      short_name='NotificationsOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M684-212H226q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h46v-328q0-20 4-40.65 4-20.64 12-39.35l80 80h-40L132-764q-4-4-4.5-9.5T132-784q5-5 10-5t10 5l658 658q4 4 4.5 9.5t-4.72 10.72Q805-101 800-101q-5 0-10-5L684-212Zm4-224q0 8.62-5.5 15.81Q677-413 669-409q-8 4-16.5 2.5T637-415L363-689q-5-5-8-11.72-3-6.72-3-14.28 0-8.25 4-16.13 4-7.87 11-12.87 18-12 38-19t41-11v-20q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v20q76 11 125 69.5T688-568v132ZM480-112q-22.6 0-40.3-12.43-17.7-12.44-17.7-33.54 0-6.03 4.89-10.03 4.88-4 10.9-4H522q7 0 11.5 4.1 4.5 4.09 4.5 10.05 0 20.85-17.7 33.35T480-112Z"/>
    </Icon>
  );
});

IconMaterialNotificationsOffW100Filled.displayName = 'OnesyIconMaterialNotificationsOffW100Filled';

export default IconMaterialNotificationsOffW100Filled;
