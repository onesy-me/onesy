import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSendW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendW100Filled'

      short_name='Send'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-238v-196l208-46-208-46v-196l574 242-574 242Z"/>
    </Icon>
  );
});

IconMaterialSendW100Filled.displayName = 'OnesyIconMaterialSendW100Filled';

export default IconMaterialSendW100Filled;
