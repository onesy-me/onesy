import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileInfoW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileInfoW100Filled'

      short_name='MobileInfo'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-328h28v-194h-28v194Zm14-264q8.5 0 14.25-5.75T500-612q0-8.5-5.75-14.25T480-632q-8.5 0-14.25 5.75T460-612q0 8.5 5.75 14.25T480-592ZM252-92v-776h460v190h36v134h-36v452H252Z"/>
    </Icon>
  );
});

IconMaterialMobileInfoW100Filled.displayName = 'OnesyIconMaterialMobileInfoW100Filled';

export default IconMaterialMobileInfoW100Filled;
