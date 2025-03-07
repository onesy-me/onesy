import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialShieldMoonW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldMoonW100'

      short_name='ShieldMoon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M501-346q26 0 51-8.5t45-25.5q5-5 4-9t-9-7q-37-13-65.5-35.5T478-489q-19-33-27.5-70t5.5-72q3-8-3-12t-12-2q-45 19-70.5 59T345-500q0 64 45.5 109T501-346Zm-21 212q-115-36-191.5-142T212-516v-208l268-100 268 100v208q0 134-76.5 240T480-134Zm0-30q104-33 172-132t68-220v-189l-240-89-240 89v189q0 121 68 220t172 132Zm0-315Z"/>
    </Icon>
  );
});

IconMaterialShieldMoonW100.displayName = 'OnesyIconMaterialShieldMoonW100';

export default IconMaterialShieldMoonW100;
