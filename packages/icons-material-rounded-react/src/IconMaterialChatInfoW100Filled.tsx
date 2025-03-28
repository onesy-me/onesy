import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChatInfoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChatInfoW100Filled'

      short_name='ChatInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-700q8.5 0 14.25-5.75T500-720q0-8.5-5.75-14.25T480-740q-8.5 0-14.25 5.75T460-720q0 8.5 5.75 14.25T480-700Zm.04 310q5.96 0 9.96-4.02 4-4.03 4-9.98v-216q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v216q0 5.95 4.04 9.98 4.03 4.02 10 4.02ZM244-292l-61 61q-14 14-32.5 6.34Q132-232.31 132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Z"/>
    </Icon>
  );
});

IconMaterialChatInfoW100Filled.displayName = 'OnesyIconMaterialChatInfoW100Filled';

export default IconMaterialChatInfoW100Filled;
