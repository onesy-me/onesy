import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMarkChatReadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MarkChatReadW100Filled'

      short_name='MarkChatRead'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m694-236 160-160q4-4 10-4.5t10 4.5q4 4 3.5 10t-4.5 10L715-218q-9 9-21 9t-21-9l-74-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l75 76Zm-450-56-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v244q0 13-8.5 21.5T798-494H566q-25 0-42.5 17.5T506-434v112q0 13-8.5 21.5T476-292H244Z"/>
    </Icon>
  );
});

IconMaterialMarkChatReadW100Filled.displayName = 'OnesyIconMaterialMarkChatReadW100Filled';

export default IconMaterialMarkChatReadW100Filled;
