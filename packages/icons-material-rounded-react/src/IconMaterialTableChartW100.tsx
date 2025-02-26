import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTableChartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartW100'

      short_name='TableChart'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M728-172H232q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17ZM200-614h560v-114q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v114Zm120 28H200v354q0 12 10 22t22 10h88v-386Zm320 0v386h88q12 0 22-10t10-22v-354H640Zm-28 0H348v386h264v-386Z"/>
    </Icon>
  );
});

IconMaterialTableChartW100.displayName = 'OnesyIconMaterialTableChartW100';

export default IconMaterialTableChartW100;
