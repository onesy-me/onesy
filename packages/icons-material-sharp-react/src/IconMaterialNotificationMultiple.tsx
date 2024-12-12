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
      <path d="M40-80v-600h80v520h600v80H40Zm520-334L280-578v258h560v-258L560-414ZM200-240v-468l360-212 80 47-352 207 272 160 300-178 60 36v408H200Zm360-320L448-672l56-56 56 56 142-142 56 56-198 198Zm0 240h280-560 280Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultiple.displayName = 'OnesyIconMaterialNotificationMultiple';

export default IconMaterialNotificationMultiple;
