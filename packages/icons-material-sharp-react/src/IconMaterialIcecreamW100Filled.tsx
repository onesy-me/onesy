import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIcecreamW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IcecreamW100Filled'

      short_name='Icecream'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M482-152 324-462q-51 26-101.5-6.5T172-560q0-35 22.5-66.5T270-672q11-94 73-145t137-51q75 0 137 51t73 145q53 14 75.5 45.5T788-560q0 60-47.5 90.5T640-462L482-152Zm0-62 134-262-14-12q-33 17-64.5 26.5T480-452q-23 0-54-8t-64-28l-14 12 134 262Z"/>
    </Icon>
  );
});

IconMaterialIcecreamW100Filled.displayName = 'OnesyIconMaterialIcecreamW100Filled';

export default IconMaterialIcecreamW100Filled;
