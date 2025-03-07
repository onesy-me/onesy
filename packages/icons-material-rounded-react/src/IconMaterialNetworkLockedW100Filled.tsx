import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedW100Filled'

      short_name='NetworkLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M676-132q-14 0-25-11t-11-25v-106q0-14 11-24t25-10h4v-40q0-29 19.5-48.5T748-416q29 0 48.5 19.5T816-348v40h4q14.41 0 24.71 10Q855-288 855-274v106q0 14-10.29 25-10.3 11-24.71 11H676Zm32-176h80v-40q0-17-11.5-28.5T748-388q-17 0-28.5 11.5T708-348v40ZM204-132q-19.69 0-27.34-18.5Q169-169 183-183l594-594q14-14 32.5-6.34Q828-775.69 828-756v218q0 12.75-8.62 21.37Q810.75-508 798-508h-50q-83 0-141.5 58.5T548-308v146q0 12.75-8.62 21.37Q530.75-132 518-132H204Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedW100Filled.displayName = 'OnesyIconMaterialNetworkLockedW100Filled';

export default IconMaterialNetworkLockedW100Filled;
