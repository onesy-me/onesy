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
      <path d="M760-720q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-240l-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h364q16 0 26.5 12t9.5 28q0 45 19.5 85t54.5 69q26 21 58.5 33.5T760-640q18 0 36-3t35-10q17-7 33 2t16 26v305q0 33-23.5 56.5T800-240H240Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadFilled.displayName = 'OnesyIconMaterialMarkChatUnreadFilled';

export default IconMaterialMarkChatUnreadFilled;
