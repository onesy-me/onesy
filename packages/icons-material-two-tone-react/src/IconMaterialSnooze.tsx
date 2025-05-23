import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSnooze = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Snooze'

      short_name='Snooze'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 11h3.63L9 15.2V17h6v-2h-3.63L15 10.8V9H9zm8.337-9.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
    </Icon>
  );
});

IconMaterialSnooze.displayName = 'OnesyIconMaterialSnooze';

export default IconMaterialSnooze;
