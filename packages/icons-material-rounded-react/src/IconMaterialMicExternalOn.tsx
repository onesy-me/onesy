import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMicExternalOn = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicExternalOn'

      short_name='MicExternalOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-680q-15-17-23.5-37t-8.5-43q0-50 35-85t85-35q50 0 85 35t35 85q0 23-8.5 43T368-680H192ZM400-80q-66 0-113-47t-47-113h-4q-16 0-27-10.5T196-276l-32-320q-2-18 10-31t30-13h152q18 0 30 13t10 31l-32 320q-2 15-13 25.5T324-240h-4q0 33 23.5 56.5T400-160q33 0 56.5-23.5T480-240v-480q0-66 47-113t113-47q66 0 113 47t47 113v600q0 17-11.5 28.5T760-80q-17 0-28.5-11.5T720-120v-600q0-33-23.5-56.5T640-800q-33 0-56.5 23.5T560-720v480q0 66-47 113T400-80ZM272-320h16l24-240h-64l24 240Zm16-240h-40 64-24Z"/>
    </Icon>
  );
});

IconMaterialMicExternalOn.displayName = 'OnesyIconMaterialMicExternalOn';

export default IconMaterialMicExternalOn;
