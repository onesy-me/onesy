import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowOpen'

      short_name='WindowOpen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-33 0-56.5-23.5T160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560q0 33-23.5 56.5T720-120H240Zm0-400h200v-20q0-8 6-14t14-6h40q8 0 14 6t6 14v20h200v-240H240v240Zm0 320h480-480Z"/>
    </Icon>
  );
});

IconMaterialWindowOpen.displayName = 'OnesyIconMaterialWindowOpen';

export default IconMaterialWindowOpen;
