import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoChat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoChat'

      short_name='VideoChat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-400h320v-120l80 80v-240l-80 80v-120H280v320ZM80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialVideoChat.displayName = 'OnesyIconMaterialVideoChat';

export default IconMaterialVideoChat;
