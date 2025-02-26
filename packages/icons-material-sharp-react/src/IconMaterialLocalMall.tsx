import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalMall = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalMall'

      short_name='LocalMall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-640h160q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h160v640H120Zm80-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z"/>
    </Icon>
  );
});

IconMaterialLocalMall.displayName = 'OnesyIconMaterialLocalMall';

export default IconMaterialLocalMall;
