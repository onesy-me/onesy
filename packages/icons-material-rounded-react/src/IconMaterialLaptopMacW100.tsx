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
      <path d="M94-198q-17 0-29.5-12.5T52-240h140q-26 0-43-17t-17-43v-428q0-26 17-43t43-17h576q26 0 43 17t17 43v428q0 26-17 43t-43 17h140q0 17-12.5 29.5T866-198H94Zm386-14q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-288-56h576q12 0 22-10t10-22v-428q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v428q0 12 10 22t22 10Zm-32 0v-492 492Z"/>
    </Icon>
  );
});

IconMaterialLaptopMacW100.displayName = 'OnesyIconMaterialLaptopMacW100';

export default IconMaterialLaptopMacW100;
