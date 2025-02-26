import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatUnread = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnread'

      short_name='MarkChatUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h484q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v440H240L80-80Zm80-720v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnread.displayName = 'OnesyIconMaterialMarkChatUnread';

export default IconMaterialMarkChatUnread;
