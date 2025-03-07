import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatBubble = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubble'

      short_name='ChatBubble'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="m4 18 2-2h14V4H4z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
    </Icon>
  );
});

IconMaterialChatBubble.displayName = 'OnesyIconMaterialChatBubble';

export default IconMaterialChatBubble;
