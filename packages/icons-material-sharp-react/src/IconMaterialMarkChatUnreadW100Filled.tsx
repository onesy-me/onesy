import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatUnreadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatUnreadW100Filled'

      short_name='MarkChatUnread'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760.12-696q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM132-180v-648h458q-2 7-2.5 13.5T586-800q0 81 51 132.5T760-616q17 0 34.5-3.5T828-630v338H244L132-180Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadW100Filled.displayName = 'OnesyIconMaterialMarkChatUnreadW100Filled';

export default IconMaterialMarkChatUnreadW100Filled;
