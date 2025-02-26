import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chat'

      short_name='Chat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v640H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Zm80-80h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80Z"/>
    </Icon>
  );
});

IconMaterialChat.displayName = 'OnesyIconMaterialChat';

export default IconMaterialChat;
