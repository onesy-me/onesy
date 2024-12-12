import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotateUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotateUpW100Filled'

      short_name='TextRotateUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M744-198h-28v-564l-68 68-20-20 102-102 102 102-20 20-68-68v564ZM552-326 148-480v-28l404-150v30l-114 42v188l114 42v30Zm-140-82v-168l-220 80v4l220 84Z"/>
    </Icon>
  );
});

IconMaterialTextRotateUpW100Filled.displayName = 'OnesyIconMaterialTextRotateUpW100Filled';

export default IconMaterialTextRotateUpW100Filled;
