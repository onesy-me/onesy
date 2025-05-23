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
      <path d="M312-730q-26.4 0-45.2-18.8Q248-767.6 248-794q0-26.4 18.8-45.2Q285.6-858 312-858q26.4 0 45.2 18.8Q376-820.4 376-794q0 26.4-18.8 45.2Q338.4-730 312-730Zm350 226q-20 0-35-14.58-15-14.59-15-35.42 0-22 15-36t35-14q22 0 36 14t14 35.5q0 21.5-14 36T662-504ZM244-136v-228h-38q-12.75 0-21.37-8.63Q176-381.25 176-394v-204q0-24.75 17.63-42.38Q211.25-658 236-658h116q20 0 35.5 11.5T409-616l87 269 107-101q7-6 14.71-9 7.72-3 16.29-3h68q19.17 0 32.58 13.42Q748-433.17 748-414v108q0 13-8.5 21.5T718-276h-10v140q0 12.75-8.62 21.37Q690.75-106 678-106h-32q-12.75 0-21.37-8.63Q616-123.25 616-136v-286l-83 78q-4 4-9.5 6t-10.9 2H485q-10 0-17-5.5T458-356l-78-241v461q0 12.75-8.62 21.37Q362.75-106 350-106h-76q-12.75 0-21.37-8.63Q244-123.25 244-136Z"/>
    </Icon>
  );
});

IconMaterialEscalatorWarningW100Filled.displayName = 'OnesyIconMaterialEscalatorWarningW100Filled';

export default IconMaterialEscalatorWarningW100Filled;
