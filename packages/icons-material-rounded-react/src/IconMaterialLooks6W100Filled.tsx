import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks6W100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6W100Filled'

      short_name='Looks6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-306h68q26 0 43-17t17-43v-68q0-26-17-43t-43-17H414v-100q0-14 9-23t23-9h74q6 0 10-4t4-10q0-6-4-10t-10-4h-74q-26 0-43 17t-17 43v228q0 26 17 43t43 17Zm-32-160h100q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68q-14 0-23-9t-9-23v-100ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialLooks6W100Filled.displayName = 'OnesyIconMaterialLooks6W100Filled';

export default IconMaterialLooks6W100Filled;
