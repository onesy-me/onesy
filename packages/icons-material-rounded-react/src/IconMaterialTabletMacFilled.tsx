import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTabletMacFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TabletMacFilled'

      short_name='TabletMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-140q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM200-40q-33 0-56.5-23.5T120-120v-720q0-33 23.5-56.5T200-920h560q33 0 56.5 23.5T840-840v720q0 33-23.5 56.5T760-40H200Zm0-280h560v-400H200v400Z"/>
    </Icon>
  );
});

IconMaterialTabletMacFilled.displayName = 'OnesyIconMaterialTabletMacFilled';

export default IconMaterialTabletMacFilled;
