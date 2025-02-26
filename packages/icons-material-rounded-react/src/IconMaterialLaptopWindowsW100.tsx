import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLaptopWindowsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindowsW100'

      short_name='LaptopWindows'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M66-224q-6 0-10-4t-4-10q0-6 4-10t10-4h126v-28q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h576q26 0 43 17t17 43v336q0 26-17 43t-43 17v28h126q6 0 10 4t4 10q0 6-4 10t-10 4H66Zm126-84h576q14 0 23-9t9-23v-336q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v336q0 14 9 23t23 9Zm-32 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindowsW100.displayName = 'OnesyIconMaterialLaptopWindowsW100';

export default IconMaterialLaptopWindowsW100;
