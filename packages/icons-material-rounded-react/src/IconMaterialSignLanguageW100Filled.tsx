import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignLanguageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignLanguageW100Filled'

      short_name='SignLanguage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-117q-6 0-10-4t-4-10q0-6 4-10t10-4h134v-80H146q-6 0-10-4t-4-10q0-6 4-10t10-4h214v-80H106q-6 0-10-4t-4-10q0-6 4-10t10-4h254v-80H186q-6 0-10-4t-4-10q0-6 4-10t10-4h278l-59-105q-5-9-4.5-19t8.5-16l1-1q8-7 18.5-7t18.5 6l215 161q18 14 28 33t10 42v164q0 39-27.5 66.5T606-117H226Zm550-338q-7 0-13-3t-10-10q-8-13-19-24.5T710-514L517-659 313-811q-5-4-6-9t3-10q4-5 9.5-6t10.5 3l203 152 48-65-140-104q-5-4-5.5-9t3.5-10q4-5 9-6t10 3l223 166 16-119q2-10 8-17.5t16-8.5q11-1 19.5 5t11.5 16l76 258q7 22 3.5 43T814-490l-20 26q-4 5-8.5 7t-9.5 2ZM278-586q4-5 9-5.5t10 3.5l45 31q5 4 6 9t-3 10q-4 5-9.5 6t-10.5-3l-45-31q-5-4-5.5-9.5T278-586Zm2-114q-5-4-6-9.5t3-10.5q4-5 9.5-6t10.5 3l52 39q5 5 5.5 10t-2.5 10q-3 5-9 6t-11-3l-52-39Z"/>
    </Icon>
  );
});

IconMaterialSignLanguageW100Filled.displayName = 'OnesyIconMaterialSignLanguageW100Filled';

export default IconMaterialSignLanguageW100Filled;
