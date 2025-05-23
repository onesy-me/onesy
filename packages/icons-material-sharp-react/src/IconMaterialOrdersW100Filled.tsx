import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOrdersW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OrdersW100Filled'

      short_name='Orders'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212v-412l-68-150 26-12 72 160h476l72-160 26 12-68 150v412H212Zm188-254h160q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H400q-5.95 0-9.98 4.04-4.02 4.03-4.02 10 0 5.96 4.02 9.96 4.03 4 9.98 4Z"/>
    </Icon>
  );
});

IconMaterialOrdersW100Filled.displayName = 'OnesyIconMaterialOrdersW100Filled';

export default IconMaterialOrdersW100Filled;
