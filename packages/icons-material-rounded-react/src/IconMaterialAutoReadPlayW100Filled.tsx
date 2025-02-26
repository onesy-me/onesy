import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAutoReadPlayW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AutoReadPlayW100Filled'

      short_name='AutoReadPlay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m435-471 105-70q10-7 10-19t-10-19l-105-70q-11-8-23-1.5T400-630v140q0 14 12 20.5t23-1.5ZM244-292l-61 61q-14 14-32.5 6.5T132-252v-516q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H244Z"/>
    </Icon>
  );
});

IconMaterialAutoReadPlayW100Filled.displayName = 'OnesyIconMaterialAutoReadPlayW100Filled';

export default IconMaterialAutoReadPlayW100Filled;
