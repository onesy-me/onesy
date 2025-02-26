import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWidthFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WidthFull'

      short_name='WidthFull'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h40v-480h-40v480Zm120 0h400v-480H280v480Zm480 0h40v-480h-40v480ZM280-720v480-480Z"/>
    </Icon>
  );
});

IconMaterialWidthFull.displayName = 'OnesyIconMaterialWidthFull';

export default IconMaterialWidthFull;
