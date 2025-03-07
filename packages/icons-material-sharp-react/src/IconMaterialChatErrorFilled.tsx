import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatErrorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatErrorFilled'

      short_name='ChatError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-800h800v640H240L80-80Zm296-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Z"/>
    </Icon>
  );
});

IconMaterialChatErrorFilled.displayName = 'OnesyIconMaterialChatErrorFilled';

export default IconMaterialChatErrorFilled;
