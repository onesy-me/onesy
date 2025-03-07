import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVideoCallW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCallW100Filled'

      short_name='VideoCall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M411-466v106q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-106h106q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H439v-106q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v106H305q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4h106ZM217-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h416q26 0 43 17t17 43v188l84.31-84.31q6.69-6.69 16.19-3.15 9.5 3.54 9.5 13.46v188q0 9.92-9.5 13.46-9.5 3.54-16.19-3.15L693-460v188q0 26-17 43t-43 17H217Z"/>
    </Icon>
  );
});

IconMaterialVideoCallW100Filled.displayName = 'OnesyIconMaterialVideoCallW100Filled';

export default IconMaterialVideoCallW100Filled;
