import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccessFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessFilled'

      short_name='SwitchAccess'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-280v-400h400v400H280Zm-160 0v-80h80v80h-80Zm0-320v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-640v-80h80v80h-80Zm320 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 480v-80h80v80h-80Zm0-320v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessFilled.displayName = 'OnesyIconMaterialSwitchAccessFilled';

export default IconMaterialSwitchAccessFilled;
