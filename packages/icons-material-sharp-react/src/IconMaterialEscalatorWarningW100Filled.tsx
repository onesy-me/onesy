import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEscalatorWarningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EscalatorWarningW100Filled'

      short_name='EscalatorWarning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M312-730q-26.4 0-45.2-18.8Q248-767.6 248-794q0-26.4 18.8-45.2Q285.6-858 312-858q26.4 0 45.2 18.8Q376-820.4 376-794q0 26.4-18.8 45.2Q338.4-730 312-730Zm350 226q-20 0-35-14.58-15-14.59-15-35.42 0-22 15-36t35-14q22 0 36 14t14 35.5q0 21.5-14 36T662-504ZM244-106v-257.6h-68V-658h219l101 311 120-113h132v184h-40v170h-92v-316l-91 86h-61l-84-261v491H244Z"/>
    </Icon>
  );
});

IconMaterialEscalatorWarningW100Filled.displayName = 'OnesyIconMaterialEscalatorWarningW100Filled';

export default IconMaterialEscalatorWarningW100Filled;
