import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStreamAppsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StreamAppsFilled'

      short_name='StreamApps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-280v-360h360v280H640l-80 80ZM200-40v-880h560v240h-80v-40H280v480h400v-40h80v240H200Z"/>
    </Icon>
  );
});

IconMaterialStreamAppsFilled.displayName = 'OnesyIconMaterialStreamAppsFilled';

export default IconMaterialStreamAppsFilled;
