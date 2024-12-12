import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEMobiledataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EMobiledataFilled'

      short_name='EMobiledata'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280v-400h320v80H400v80h240v80H400v80h240v80H320Z"/>
    </Icon>
  );
});

IconMaterialEMobiledataFilled.displayName = 'OnesyIconMaterialEMobiledataFilled';

export default IconMaterialEMobiledataFilled;
