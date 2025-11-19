import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileArrowRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileArrowRightW100Filled'

      short_name='MobileArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-495v28h194l-91 91 20 20 125-125-123-123-20 20 89 89H356ZM252-92v-776h460v190h36v134h-36v452H252Z"/>
    </Icon>
  );
});

IconMaterialMobileArrowRightW100Filled.displayName = 'OnesyIconMaterialMobileArrowRightW100Filled';

export default IconMaterialMobileArrowRightW100Filled;
