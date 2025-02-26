import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileFriendlyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileFriendlyFilled'

      short_name='MobileFriendly'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-40v-880h560v240h-80v-40H240v480h400v-40h80v240H160Zm438-280L428-490l56-56 114 114 226-226 56 56-282 282Z"/>
    </Icon>
  );
});

IconMaterialMobileFriendlyFilled.displayName = 'OnesyIconMaterialMobileFriendlyFilled';

export default IconMaterialMobileFriendlyFilled;
