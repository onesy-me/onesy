import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationMultipleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationMultipleW100'

      short_name='NotificationMultiple'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M118-132v-488h28v460h522v28H118Zm416-288L254-584v316h560v-316L534-420ZM226-240v-384l308-180 27 16-299 176 272 160 276-162 32 21v353H226Zm298-298-76-76 20-20 56 56 142-142 20 20-162 162Zm10 270h280-560 280Z"/>
    </Icon>
  );
});

IconMaterialNotificationMultipleW100.displayName = 'OnesyIconMaterialNotificationMultipleW100';

export default IconMaterialNotificationMultipleW100;
