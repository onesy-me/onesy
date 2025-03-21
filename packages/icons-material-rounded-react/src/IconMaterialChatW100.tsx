import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatW100'

      short_name='Chat'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m244-292-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Zm-12-28h536q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v520l72-72Zm-72 0v-480 480Zm120-106h240q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-120h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Zm0-120h400q6 0 10-4t4-10q0-6-4-10t-10-4H280q-6 0-10 4t-4 10q0 6 4 10t10 4Z"/>
    </Icon>
  );
});

IconMaterialChatW100.displayName = 'OnesyIconMaterialChatW100';

export default IconMaterialChatW100;
