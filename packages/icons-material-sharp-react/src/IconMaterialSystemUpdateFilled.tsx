import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSystemUpdateFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SystemUpdateFilled'

      short_name='SystemUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-40v-880h560v880H200Zm80-200h400v-480H280v480Zm200-80L320-480l56-56 64 62v-166h80v166l64-62 56 56-160 160Z"/>
    </Icon>
  );
});

IconMaterialSystemUpdateFilled.displayName = 'OnesyIconMaterialSystemUpdateFilled';

export default IconMaterialSystemUpdateFilled;
