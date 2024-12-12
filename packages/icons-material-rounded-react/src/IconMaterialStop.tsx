import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStop = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stop'

      short_name='Stop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-320v-320q0-33 23.5-56.5T320-720h320q33 0 56.5 23.5T720-640v320q0 33-23.5 56.5T640-240H320q-33 0-56.5-23.5T240-320Zm80 0h320v-320H320v320Zm160-160Z"/>
    </Icon>
  );
});

IconMaterialStop.displayName = 'OnesyIconMaterialStop';

export default IconMaterialStop;
