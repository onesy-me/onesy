import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial60fps = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='60fps'

      short_name='60fps'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-200v-560h320v120H200v80h240v360H80Zm120-120h120v-120H200v120Zm400 0h160v-320H600v320ZM480-200v-560h400v560H480Z"/>
    </Icon>
  );
});

IconMaterial60fps.displayName = 'OnesyIconMaterial60fps';

export default IconMaterial60fps;
