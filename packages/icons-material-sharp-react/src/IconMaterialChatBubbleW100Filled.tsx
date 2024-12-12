import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatBubbleW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleW100Filled'

      short_name='ChatBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-180v-648h696v536H244L132-180Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleW100Filled.displayName = 'OnesyIconMaterialChatBubbleW100Filled';

export default IconMaterialChatBubbleW100Filled;
