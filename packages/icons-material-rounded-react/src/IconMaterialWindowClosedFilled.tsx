import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWindowClosedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowClosedFilled'

      short_name='WindowClosed'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-240h400v-200H280v200Zm-40 120q-33 0-56.5-23.5T160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560q0 33-23.5 56.5T720-120H240Zm40-400h160v-20q0-8 6-14t14-6h40q8 0 14 6t6 14v20h160v-200H280v200Zm-40 320h480v-560H240v560Z"/>
    </Icon>
  );
});

IconMaterialWindowClosedFilled.displayName = 'OnesyIconMaterialWindowClosedFilled';

export default IconMaterialWindowClosedFilled;
