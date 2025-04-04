import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkUnreadChatAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkUnreadChatAlt'

      short_name='MarkUnreadChatAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-4q-37-8-67.5-27.5T600-720H240v80ZM80-80v-800h484q-4 20-4 40t4 40H160v525l46-45h594v-324q23-5 43-13.5t37-22.5v440H240L80-80Zm80-720v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/>
    </Icon>
  );
});

IconMaterialMarkUnreadChatAlt.displayName = 'OnesyIconMaterialMarkUnreadChatAlt';

export default IconMaterialMarkUnreadChatAlt;
