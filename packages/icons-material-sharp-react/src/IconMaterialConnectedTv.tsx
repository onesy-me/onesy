import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialConnectedTv = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConnectedTv'

      short_name='ConnectedTv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-320h80q0-33-23.5-56.5T200-400v80Zm142 0h58q0-83-58.5-141.5T200-520v58q59 0 100.5 41.5T342-320Zm120 0h58q0-66-25-124.5t-68.5-102Q383-590 324.5-615T200-640v58q109 0 185.5 76.5T462-320ZM320-120v-80H80v-640h800v640H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialConnectedTv.displayName = 'OnesyIconMaterialConnectedTv';

export default IconMaterialConnectedTv;
