import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lan'

      short_name='Lan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-80v-280h120v-160h200v-80H320v-280h320v280H520v80h200v160h120v280H520v-280h120v-80H320v80h120v280H120Zm280-600h160v-120H400v120ZM200-160h160v-120H200v120Zm400 0h160v-120H600v120ZM480-680ZM360-280Zm240 0Z"/>
    </Icon>
  );
});

IconMaterialLan.displayName = 'OnesyIconMaterialLan';

export default IconMaterialLan;
