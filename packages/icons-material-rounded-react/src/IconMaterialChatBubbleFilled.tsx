import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatBubbleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleFilled'

      short_name='ChatBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-240-92 92q-19 19-43.5 8.5T80-177v-623q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleFilled.displayName = 'OnesyIconMaterialChatBubbleFilled';

export default IconMaterialChatBubbleFilled;
