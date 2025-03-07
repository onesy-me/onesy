import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialExitToAppW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExitToAppW100'

      short_name='ExitToApp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M232-172q-26 0-43-17t-17-43v-100q0-6 4-10t10-4q6 0 10 4t4 10v100q0 12 10 22t22 10h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v100q0 6-4 10t-10 4q-6 0-10-4t-4-10v-100q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm296-294H186q-6 0-10-4t-4-10q0-6 4-10t10-4h342L428-594q-4-4-4.5-9.5T428-614q5-5 10-5t10 5l113 113q5 5 7 10t2 11q0 6-2 11t-7 10L448-346q-4 4-9.5 4.5T428-346q-5-5-5-10t5-10l100-100Z"/>
    </Icon>
  );
});

IconMaterialExitToAppW100.displayName = 'OnesyIconMaterialExitToAppW100';

export default IconMaterialExitToAppW100;
