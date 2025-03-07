import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialInfoIW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InfoIW100Filled'

      short_name='InfoI'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-680q-23 0-38.5-15.5T426-734q0-23 15.5-38.5T480-788q23 0 38.5 15.5T534-734q0 23-15.5 38.5T480-680Zm.12 508Q466-172 456-181.92q-10-9.91-10-24.08v-320q0-14.17 9.88-24.08 9.88-9.92 24-9.92t24.12 9.92q10 9.91 10 24.08v320q0 14.17-9.88 24.08-9.88 9.92-24 9.92Z"/>
    </Icon>
  );
});

IconMaterialInfoIW100Filled.displayName = 'OnesyIconMaterialInfoIW100Filled';

export default IconMaterialInfoIW100Filled;
