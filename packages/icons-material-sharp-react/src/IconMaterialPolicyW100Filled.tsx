import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPolicyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PolicyW100Filled'

      short_name='Policy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-134q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 59-17 113t-45 105L568-416q9-14 14.5-30.5T588-480q0-45-31.5-76.5T480-588q-45 0-76.5 31.5T372-480q0 45 31.5 76.5T480-372q19 0 36.5-6t31.5-18l121 121q-40 46-85 84.5T480-134Zm0-266q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialPolicyW100Filled.displayName = 'OnesyIconMaterialPolicyW100Filled';

export default IconMaterialPolicyW100Filled;
