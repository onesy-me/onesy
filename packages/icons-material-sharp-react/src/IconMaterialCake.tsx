import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCake = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Cake'

      short_name='Cake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-320h80v-240h240v-58q-18-12-29-29t-11-41q0-15 6-29.5t18-26.5l56-56 56 56q12 12 18 26.5t6 29.5q0 24-11 41t-29 29v58h240v240h80v320H120Zm160-320h400v-160H280v160Zm-80 240h560v-160H200v160Zm80-240h400-400Zm-80 240h560-560Zm560-240H200h560Z"/>
    </Icon>
  );
});

IconMaterialCake.displayName = 'OnesyIconMaterialCake';

export default IconMaterialCake;
