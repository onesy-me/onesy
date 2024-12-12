import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccess = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccess'

      short_name='SwitchAccess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-400h400v400H280Zm80-80h240v-240H360v240Zm-240 80v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-640v-80h80v80h-80Zm320 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-320v-80h80v80h-80ZM480-480Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccess.displayName = 'OnesyIconMaterialSwitchAccess';

export default IconMaterialSwitchAccess;
