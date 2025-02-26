import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStethoscopeCheck = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StethoscopeCheck'

      short_name='StethoscopeCheck'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M694-120 552-262l57-56 85 85 170-170 56 57-226 226ZM540-80q-108 0-184-76t-76-184v-23q-86-14-143-80.5T80-600v-240h120v-40h80v160h-80v-40h-40v160q0 66 47 113t113 47q66 0 113-47t47-113v-160h-40v40h-80v-160h80v40h120v240q0 90-57 156.5T360-363v23q0 75 52.5 127.5T540-160v80Z"/>
    </Icon>
  );
});

IconMaterialStethoscopeCheck.displayName = 'OnesyIconMaterialStethoscopeCheck';

export default IconMaterialStethoscopeCheck;
