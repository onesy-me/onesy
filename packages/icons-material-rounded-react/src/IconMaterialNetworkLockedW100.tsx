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
      <path d="m183-183 594-594q14-14 32.5-6.34Q828-775.69 828-756v234q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97v-238L200-160h334q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H204q-19.69 0-27.34-18.5Q169-169 183-183Zm493 51q-14 0-25-11t-11-25v-106q0-14 11-24t25-10h4v-40q0-29 19.5-48.5T748-416q29 0 48.5 19.5T816-348v40h4q14.41 0 24.71 10Q855-288 855-274v106q0 14-10.29 25-10.3 11-24.71 11H676Zm32-176h80v-40q0-17-11.5-28.5T748-388q-17 0-28.5 11.5T708-348v40ZM200-160l600-600-300 300-300 300Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedW100.displayName = 'OnesyIconMaterialNetworkLockedW100';

export default IconMaterialNetworkLockedW100;
