import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkLockedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedW100'

      short_name='NetworkLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m132-132 696-696v320h-28v-252L200-160h348v28H132Zm508 0v-176h40v-40q0-29 19.5-48.5T748-416q29 0 48.5 19.5T816-348v40h39v176H640Zm68-176h80v-40q0-17-11.5-28.5T748-388q-17 0-28.5 11.5T708-348v40ZM200-160l600-600-300 300-300 300Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedW100.displayName = 'OnesyIconMaterialNetworkLockedW100';

export default IconMaterialNetworkLockedW100;
