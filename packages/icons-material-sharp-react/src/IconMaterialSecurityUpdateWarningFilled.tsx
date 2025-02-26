import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSecurityUpdateWarningFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SecurityUpdateWarningFilled'

      short_name='SecurityUpdateWarning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm-40-160v-240h80v240h-80ZM200-40v-880h560v880H200Zm80-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarningFilled.displayName = 'OnesyIconMaterialSecurityUpdateWarningFilled';

export default IconMaterialSecurityUpdateWarningFilled;
