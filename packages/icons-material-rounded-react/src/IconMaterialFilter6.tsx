import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter6 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter6'

      short_name='Filter6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-360h80q33 0 56.5-23.5T680-440v-80q0-33-23.5-56.5T600-600h-80v-80h80q17 0 28.5-11.5T640-720q0-17-11.5-28.5T600-760h-80q-33 0-56.5 23.5T440-680v240q0 33 23.5 56.5T520-360Zm0-160h80v80h-80v-80ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-520q0-17 11.5-28.5T120-720q17 0 28.5 11.5T160-680v520h520q17 0 28.5 11.5T720-120q0 17-11.5 28.5T680-80H160Zm160-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialFilter6.displayName = 'OnesyIconMaterialFilter6';

export default IconMaterialFilter6;
