import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisabledByDefaultW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisabledByDefaultW100'

      short_name='DisabledByDefault'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-461 135 135q4 4 9.5 3.5t9.5-4.5q4-4 4-9.5t-4-9.5L499-480l135-135q4-4 4-9.5t-4-9.5q-4-4-9.5-4t-9.5 4L480-499 345-634q-4-4-9-4t-9 4q-4 4-4 9.5t4 9.5l134 135-135 135q-4 4-3.5 9t4.5 9q4 4 9.5 4t9.5-4l134-134ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterialDisabledByDefaultW100.displayName = 'OnesyIconMaterialDisabledByDefaultW100';

export default IconMaterialDisabledByDefaultW100;
