import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIcecreamW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IcecreamW100'

      short_name='Icecream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-152 324-462q-51 26-101.5-6.5T172-560q0-35 22.5-66.5T270-672q11-94 73-145t137-51q75 0 137 51t73 145q53 14 75.5 45.5T788-560q0 60-47.5 90.5T640-462L482-152ZM280-480q15 0 29.5-5t26.5-17l22-22 26 16q21 14 45.5 21t50.5 7q26 0 50.5-7t45.5-21l26-16 22 22q12 12 26.5 17t29.5 5q33 0 56.5-23.5T760-560q0-30-19-52.5T692-640l-30-4-2-32q-5-69-57-116.5T480-840q-71 0-123 47.5T300-676l-2 32-30 6q-30 6-49 27t-19 51q0 33 23.5 56.5T280-480Zm202 266 134-262-14-12q-33 17-64.5 26.5T480-452q-23 0-54-8t-64-28l-14 12 134 262Zm-2-446Z"/>
    </Icon>
  );
});

IconMaterialIcecreamW100.displayName = 'OnesyIconMaterialIcecreamW100';

export default IconMaterialIcecreamW100;
