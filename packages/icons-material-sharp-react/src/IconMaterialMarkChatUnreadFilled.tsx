import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatUnreadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadFilled'

      short_name='MarkChatUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-720q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM80-80v-800h484q-4 20-4 40t4 40q14 69 69 114.5T760-640q32 0 63-10t57-30v440H240L80-80Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadFilled.displayName = 'OnesyIconMaterialMarkChatUnreadFilled';

export default IconMaterialMarkChatUnreadFilled;
