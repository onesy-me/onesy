import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopMacW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacW100'

      short_name='DesktopMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M460-274H192q-26 0-43-17t-17-43v-394q0-26 17-43t43-17h576q26 0 43 17t17 43v394q0 26-17 43t-43 17H500l70 70q2 2 4 10v8q0 6-4 10t-10 4H396q-4 0-7-3t-3-7v-14q0-2 3-7l71-71Zm-300-70h640v-384q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v384Zm0 0v-416 416Z"/>
    </Icon>
  );
});

IconMaterialDesktopMacW100.displayName = 'OnesyIconMaterialDesktopMacW100';

export default IconMaterialDesktopMacW100;
