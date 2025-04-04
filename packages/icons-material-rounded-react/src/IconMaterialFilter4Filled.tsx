import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter4Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter4Filled'

      short_name='Filter4'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-520v120q0 17 11.5 28.5T640-360q17 0 28.5-11.5T680-400v-320q0-17-11.5-28.5T640-760q-17 0-28.5 11.5T600-720v120h-80v-120q0-17-11.5-28.5T480-760q-17 0-28.5 11.5T440-720v160q0 17 11.5 28.5T480-520h120ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Z"/>
    </Icon>
  );
});

IconMaterialFilter4Filled.displayName = 'OnesyIconMaterialFilter4Filled';

export default IconMaterialFilter4Filled;
