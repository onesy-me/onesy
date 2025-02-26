import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatRead = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatRead'

      short_name='MarkChatRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-160 553-302l56-56 85 85 170-170 56 57-226 226ZM80-80v-800h800v360h-80v-280H160v525l46-45h274v80H240L80-80Zm80-240v-480 480Z"/>
    </Icon>
  );
});

IconMaterialMarkChatRead.displayName = 'OnesyIconMaterialMarkChatRead';

export default IconMaterialMarkChatRead;
