import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopMacW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopMacW100'

      short_name='LaptopMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M52-198v-42h108l-28-28v-520h696v520l-28 28h108v42H52Zm428-14q8.5 0 14.25-5.75T500-232q0-8.5-5.75-14.25T480-252q-8.5 0-14.25 5.75T460-232q0 8.5 5.75 14.25T480-212Zm-320-56h640v-492H160v492Zm0 0v-492 492Z"/>
    </Icon>
  );
});

IconMaterialLaptopMacW100.displayName = 'OnesyIconMaterialLaptopMacW100';

export default IconMaterialLaptopMacW100;
