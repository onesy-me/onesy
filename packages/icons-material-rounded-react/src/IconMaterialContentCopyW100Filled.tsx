import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentCopyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopyW100Filled'

      short_name='ContentCopy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M366-292q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h296q26 0 43 17t17 43v416q0 26-17 43t-43 17H366ZM258-184q-26 0-43-17t-17-43v-430q0-6 4-10t10-4q6 0 10 4t4 10v430q0 12 10 22t22 10h310q6 0 10 4t4 10q0 6-4 10t-10 4H258Z"/>
    </Icon>
  );
});

IconMaterialContentCopyW100Filled.displayName = 'OnesyIconMaterialContentCopyW100Filled';

export default IconMaterialContentCopyW100Filled;
