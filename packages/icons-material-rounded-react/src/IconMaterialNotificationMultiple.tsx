import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationMultiple = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationMultiple'

      short_name='NotificationMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80q-33 0-56.5-23.5T40-160v-480q0-17 11.5-28.5T80-680q17 0 28.5 11.5T120-640v480h560q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H120Zm720-240v-258L600-438q-19 11-40 11t-40-11L280-578v258h560Zm-560 80q-33 0-56.5-23.5T200-320v-340q0-21 9.5-40t28.5-30l261-154q14-8 30.5-4t24.5 18q9 14 4.5 31T540-814L288-666l272 160 270-160q15-9 30.5-8.5T890-666q14 8 22 21.5t8 30.5v294q0 33-23.5 56.5T840-240H280Zm280-432 114-114q11-11 28-11t28 11q11 11 11 28t-11 28L588-588q-12 12-28 12t-28-12l-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l28 28ZM280-320h560-560Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultiple.displayName = 'OnesyIconMaterialNotificationMultiple';

export default IconMaterialNotificationMultiple;
