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
      <path d="M480-280q-17 0-28.5-11.5T440-320q0-17 11.5-28.5T480-360q17 0 28.5 11.5T520-320q0 17-11.5 28.5T480-280Zm0-160q-17 0-28.5-11.5T440-480v-160q0-17 11.5-28.5T480-680q17 0 28.5 11.5T520-640v160q0 17-11.5 28.5T480-440ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialSecurityUpdateWarningFilled.displayName = 'OnesyIconMaterialSecurityUpdateWarningFilled';

export default IconMaterialSecurityUpdateWarningFilled;
