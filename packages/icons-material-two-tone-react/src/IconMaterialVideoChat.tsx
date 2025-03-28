import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoChat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChat'

      short_name='VideoChat'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M4,17.17L5.17,16H20V4H4V17.17z M7,7c0-0.55,0.45-1,1-1h6c0.55,0,1,0.45,1,1 v1.99L17,7v6l-2-1.99V13c0,0.55-0.45,1-1,1H8c-0.55,0-1-0.45-1-1V7z" enableBackground="new" opacity=".3"/><path d="M20,2H4C2.9,2,2.01,2.9,2.01,4L2,22l4-4h14c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M20,16H5.17L4,17.17V4h16V16z"/><path d="M8,14h6c0.55,0,1-0.45,1-1v-1.99L17,13V7l-2,1.99V7c0-0.55-0.45-1-1-1H8C7.45,6,7,6.45,7,7v6C7,13.55,7.45,14,8,14z"/></g></g>
    </Icon>
  );
});

IconMaterialVideoChat.displayName = 'OnesyIconMaterialVideoChat';

export default IconMaterialVideoChat;
