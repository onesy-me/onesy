import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLooks6W100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Looks6W100'

      short_name='Looks6'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M446-306h68q26 0 43-17t17-43v-68q0-26-17-43t-43-17H414v-100q0-14 9-23t23-9h74q6 0 10-4t4-10q0-6-4-10t-10-4h-74q-26 0-43 17t-17 43v228q0 26 17 43t43 17Zm-32-160h100q14 0 23 9t9 23v68q0 14-9 23t-23 9h-68q-14 0-23-9t-9-23v-100ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialLooks6W100.displayName = 'OnesyIconMaterialLooks6W100';

export default IconMaterialLooks6W100;
