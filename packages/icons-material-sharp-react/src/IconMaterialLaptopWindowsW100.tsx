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
      <path d="M52-224v-28h140v-28h-60v-456h696v456h-60v28h140v28H52Zm108-84h640v-400H160v400Zm0 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindowsW100.displayName = 'OnesyIconMaterialLaptopWindowsW100';

export default IconMaterialLaptopWindowsW100;
