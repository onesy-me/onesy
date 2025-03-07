import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatBubbleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatBubbleW100'

      short_name='ChatBubble'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m244-292-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialChatBubbleW100.displayName = 'OnesyIconMaterialChatBubbleW100';

export default IconMaterialChatBubbleW100;
