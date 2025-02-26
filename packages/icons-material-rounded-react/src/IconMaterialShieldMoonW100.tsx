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
      <path d="M501-346q26 0 51-8.5t45-25.5q5-5 4-9t-9-7q-37-13-65.5-35.5T478-489q-19-33-27.5-70t5.5-72q3-8-3-12t-12-2q-45 19-70.5 59T345-500q0 64 45.5 109T501-346Zm-21 207q-5 0-11-1t-11-3q-113-45-179.5-148.5T212-516v-166q0-19 11-34.5t28-22.5l208-77q11-4 21-4t21 4l208 77q17 7 28 22.5t11 34.5v166q0 121-66.5 224.5T502-143q-5 2-11 3t-11 1Zm0-25q104-33 172-132t68-220v-167q0-10-5.5-18T699-713l-208-77q-5-2-11-2t-11 2l-208 77q-10 4-15.5 12t-5.5 18v167q0 121 68 220t172 132Zm0-314Z"/>
    </Icon>
  );
});

IconMaterialShieldMoonW100.displayName = 'OnesyIconMaterialShieldMoonW100';

export default IconMaterialShieldMoonW100;
