import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBackgroundGridSmallW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackgroundGridSmallW100'

      short_name='BackgroundGridSmall'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-200h87v-119H200v87q0 12 10 22t22 10Zm115 0h119v-119H347v119Zm147 0h119v-119H494v119Zm147 0h87q12 0 22-10t10-22v-87H641v119ZM200-641h119v-119h-87q-12 0-22 10t-10 22v87Zm0 147h119v-119H200v119Zm0 147h119v-119H200v119Zm147-294h119v-119H347v119Zm0 147h119v-119H347v119Zm0 147h119v-119H347v119Zm147-294h119v-119H494v119Zm0 147h119v-119H494v119Zm0 147h119v-119H494v119Zm147-294h119v-87q0-12-10-22t-22-10h-87v119Zm0 147h119v-119H641v119Zm0 147h119v-119H641v119ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Z"/>
    </Icon>
  );
});

IconMaterialBackgroundGridSmallW100.displayName = 'OnesyIconMaterialBackgroundGridSmallW100';

export default IconMaterialBackgroundGridSmallW100;
