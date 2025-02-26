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
      <path d="M760.12-696q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM244-292l-61 61q-14 14-32.5 6.34Q132-232.31 132-252v-516q0-26 17-43t43-17h370q11.24 0 18.62 8.5Q588-811 586-800q0 41 14 74t37 58q24 24 55.5 38t67.5 14q8.37 0 16.73-.69 8.37-.69 16.27-2.31 14-2 24.5 5.5t10.5 20.91v240.56Q828-326 811-309t-43 17H244Z"/>
    </Icon>
  );
});

IconMaterialMarkChatUnreadW100Filled.displayName = 'OnesyIconMaterialMarkChatUnreadW100Filled';

export default IconMaterialMarkChatUnreadW100Filled;
