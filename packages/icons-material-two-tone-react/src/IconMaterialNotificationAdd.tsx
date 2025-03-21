import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotificationAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotificationAdd'

      short_name='NotificationAdd'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24" x="0" y="0"/><g><path d="M16,14v3H8v-7c0-2.21,1.79-4,4-4c0.85,0,1.64,0.26,2.28,0.72l1.43-1.43c-0.64-0.51-1.39-0.88-2.21-1.09V3.5 C13.5,2.67,12.83,2,12,2s-1.5,0.67-1.5,1.5v0.7C7.91,4.86,6,7.21,6,10v7H4v2h16v-2h-2v-3H16z M12,22c1.1,0,2-0.9,2-2h-4 C10,21.1,10.9,22,12,22z M24,8h-3V5h-2v3h-3v2h3v3h2v-3h3V8z"/></g>
    </Icon>
  );
});

IconMaterialNotificationAdd.displayName = 'OnesyIconMaterialNotificationAdd';

export default IconMaterialNotificationAdd;
