import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial1kW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='1kW100'

      short_name='1k'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m536-472 94 92q2 2 10 4 10 0 13.5-9t-3.5-16l-84-81 85-79q7-6 3-14.5t-13-8.5q-2 0-4.5 1t-4.5 3l-96 90v-80q0-6-4-10t-10-4q-6 0-10 4t-4 10v180q0 6 4 10t10 4q6 0 10-4t4-10v-82Zm-180-84v166q0 6 4 10t10 4q6 0 10-4t4-10v-180q0-6-4-10t-10-4h-60q-6 0-10 4t-4 10q0 6 4 10t10 4h46ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Z"/>
    </Icon>
  );
});

IconMaterial1kW100.displayName = 'OnesyIconMaterial1kW100';

export default IconMaterial1kW100;
