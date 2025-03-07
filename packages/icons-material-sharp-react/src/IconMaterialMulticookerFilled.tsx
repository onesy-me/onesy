import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMulticookerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MulticookerFilled'

      short_name='Multicooker'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-760v-40q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v40h120q33 0 56.5 23.5T840-680v40H120v-40q0-33 23.5-56.5T200-760h120ZM200-120q-33 0-56.5-23.5T120-200v-360h160v80q0 33 23.5 56.5T360-400h240q33 0 56.5-23.5T680-480v-80h160v360q0 33-23.5 56.5T760-120H200Zm120-120q17 0 28.5-11.5T360-280q0-17-11.5-28.5T320-320q-17 0-28.5 11.5T280-280q0 17 11.5 28.5T320-240Zm160 0q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm160 0q17 0 28.5-11.5T680-280q0-17-11.5-28.5T640-320q-17 0-28.5 11.5T600-280q0 17 11.5 28.5T640-240ZM360-480v-80h240v80H360Zm40-280h160v-40H400v40Z"/>
    </Icon>
  );
});

IconMaterialMulticookerFilled.displayName = 'OnesyIconMaterialMulticookerFilled';

export default IconMaterialMulticookerFilled;
