import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyW100'

      short_name='Emergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M436-146v-257L213-274l-44-77 223-129-223-128 44-77 223 129v-258h88v258l223-129 44 77-223 128 223 129-44 77-223-129v257h-88Z"/>
    </Icon>
  );
});

IconMaterialEmergencyW100.displayName = 'OnesyIconMaterialEmergencyW100';

export default IconMaterialEmergencyW100;
