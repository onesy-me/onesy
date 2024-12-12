import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSubscriptionsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SubscriptionsFilled'

      short_name='Subscriptions'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-560h800v560H80Zm320-120 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280Z"/>
    </Icon>
  );
});

IconMaterialSubscriptionsFilled.displayName = 'OnesyIconMaterialSubscriptionsFilled';

export default IconMaterialSubscriptionsFilled;
