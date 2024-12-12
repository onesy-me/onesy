import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationMultipleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationMultipleFilled'

      short_name='NotificationMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-80v-600h80v520h600v80H40Zm160-160v-468l360-212 80 47-352 207 272 160 300-178 60 36v408H200Zm354-320L442-672l56-56 56 56 142-142 56 56-198 198Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultipleFilled.displayName = 'OnesyIconMaterialNotificationMultipleFilled';

export default IconMaterialNotificationMultipleFilled;
