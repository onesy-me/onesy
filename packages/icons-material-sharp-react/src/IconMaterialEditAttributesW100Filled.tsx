import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditAttributesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditAttributesW100Filled'

      short_name='EditAttributes'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-332q-62 0-105-43t-43-105q0-62 43-105t105-43h400q62 0 105 43t43 105q0 62-43 105t-105 43H280Zm42-80 118-118-20-20-98 98-38-38-20 20 58 58Z"/>
    </Icon>
  );
});

IconMaterialEditAttributesW100Filled.displayName = 'OnesyIconMaterialEditAttributesW100Filled';

export default IconMaterialEditAttributesW100Filled;
