import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewModuleW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewModuleW100'

      short_name='ViewModule'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M592-494h167v-154q0-14-9-23t-23-9H592v186Zm-195 0h167v-186H397v186Zm-195 0h167v-186H234q-14 0-23 9t-9 23v154Zm32 214h135v-186H202v154q0 14 9 23t23 9Zm163 0h167v-186H397v186Zm195 0h135q14 0 23-9t9-23v-154H592v186Zm-418-32v-336q0-24.75 17.63-42.38Q209.25-708 234-708h493q24.75 0 42.38 17.62Q787-672.75 787-648v336q0 24.75-17.62 42.37Q751.75-252 727-252H234q-24.75 0-42.37-17.63Q174-287.25 174-312Z"/>
    </Icon>
  );
});

IconMaterialViewModuleW100.displayName = 'OnesyIconMaterialViewModuleW100';

export default IconMaterialViewModuleW100;
