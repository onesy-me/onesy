import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCakeAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CakeAddW100Filled'

      short_name='CakeAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M158-132q-11.05 0-18.52-8.5Q132-149 132-160v-168q0-24.75 17.63-42.38Q167.25-388 192-388h496q24.75 0 42.38 17.62Q748-352.75 748-328v168q0 11-8.5 19.5T720-132H158Zm54-284v-160q0-24.75 17.63-42.38Q247.25-636 272-636h154v-60q-17-11-28.5-24.5T386-751.85q0-11.15 3.91-20.58 3.91-9.44 11.73-17.24L429-817q1-1 11.29-5 1.71 0 10.71 5l27.36 27.33q7.82 7.8 11.73 17.24Q494-763 494-751.85q0 17.85-11.5 31.35T454-696v60h154q24.75 0 42.38 17.62Q668-600.75 668-576v160H212Zm561.96-224q-5.96 0-9.96-4.03-4-4.02-4-9.97v-66h-66q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4h66v-66q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v66h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4h-66v66q0 5.95-4.04 9.97-4.03 4.03-10 4.03Z"/>
    </Icon>
  );
});

IconMaterialCakeAddW100Filled.displayName = 'OnesyIconMaterialCakeAddW100Filled';

export default IconMaterialCakeAddW100Filled;
