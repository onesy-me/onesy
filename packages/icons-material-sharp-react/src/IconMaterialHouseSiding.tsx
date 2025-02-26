import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHouseSiding = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HouseSiding'

      short_name='HouseSiding'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120v-406L88-440l-48-64 440-336 440 336-48 64-112-86v406h-80v-120H280v120h-80Zm80-360h400v-80H280v80Zm0 160h400v-80H280v80Zm70-320h260l-130-99-130 99Z"/>
    </Icon>
  );
});

IconMaterialHouseSiding.displayName = 'OnesyIconMaterialHouseSiding';

export default IconMaterialHouseSiding;
