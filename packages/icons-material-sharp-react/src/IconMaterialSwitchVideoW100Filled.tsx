import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchVideoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchVideoW100Filled'

      short_name='SwitchVideo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m325-376 20-20-70-70h300l-70 70 20 20 104-104-104-104-20 20 70 70H275l70-70-20-20-104 104 104 104ZM157-212v-536h536v248l110-110v260L693-460v248H157Z"/>
    </Icon>
  );
});

IconMaterialSwitchVideoW100Filled.displayName = 'OnesyIconMaterialSwitchVideoW100Filled';

export default IconMaterialSwitchVideoW100Filled;
