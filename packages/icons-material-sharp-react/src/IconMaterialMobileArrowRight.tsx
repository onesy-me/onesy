import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileArrowRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileArrowRight'

      short_name='MobileArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-520v80h166l-62 64 56 56 160-160-160-160-56 56 62 64H320ZM200-40v-880h560v204h40v192h-40v484H200Zm80-80h400v-720H280v720Zm0 0v-720 720Z"/>
    </Icon>
  );
});

IconMaterialMobileArrowRight.displayName = 'OnesyIconMaterialMobileArrowRight';

export default IconMaterialMobileArrowRight;
