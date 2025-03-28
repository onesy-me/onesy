import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEnableFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnableFilled'

      short_name='Enable'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-112 56.5-206.5T290-833q15-8 31.5-2t23.5 22q6 15 0 30.5T325-759q-75 42-120 116.5T160-480q0 134 93 227t227 93q134 0 227-93t93-227q0-88-45-162.5T635-759q-14-8-20-23.5t0-30.5q6-16 21.5-23t29.5 1q98 51 156 146t58 209q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm-40-393v-367q0-17 11.5-28.5T480-880q17 0 28.5 11.5T520-840v367l76-75q11-11 27.5-11.5T652-548q11 11 11 28t-11 28L508-348q-12 12-28 12t-28-12L308-492q-11-11-11.5-27.5T308-548q11-11 28-11t28 11l76 75Z"/>
    </Icon>
  );
});

IconMaterialEnableFilled.displayName = 'OnesyIconMaterialEnableFilled';

export default IconMaterialEnableFilled;
