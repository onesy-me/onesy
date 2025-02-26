import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPassword = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Password'

      short_name='Password'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-80h800v80H80Zm46-242-52-30 34-60H40v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Zm320 0-52-30 34-60h-68v-60h68l-34-58 52-30 34 58 34-58 52 30-34 58h68v60h-68l34 60-52 30-34-60-34 60Z"/>
    </Icon>
  );
});

IconMaterialPassword.displayName = 'OnesyIconMaterialPassword';

export default IconMaterialPassword;
