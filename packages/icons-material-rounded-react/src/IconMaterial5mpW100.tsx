import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5mpW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='5mpW100'

      short_name='5mp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M526-544H420q-6 0-10 4t-4 10q0 6 4 10t10 4h106q12 0 20-8t8-20v-62q0-12-8-20t-20-8h-92v-62h106q6 0 10-4t4-10q0-6-4-10t-10-4H420q-6 0-10 4t-4 10v90q0 6 4 10t10 4h106v62ZM232-172q-26 0-43-17t-17-43v-496q0-26 17-43t43-17h496q26 0 43 17t17 43v496q0 26-17 43t-43 17H232Zm0-28h496q12 0 22-10t10-22v-496q0-12-10-22t-22-10H232q-12 0-22 10t-10 22v496q0 12 10 22t22 10Zm-32-560v560-560Zm84 344h72v106q0 6 4 10t10 4q6 0 10-4t4-10v-106h72v166q0 6 4 10t10 4q6 0 10-4t4-10v-170q0-11-6.5-17.5T460-444H280q-11 0-17.5 6.5T256-420v170q0 6 4 10t10 4q6 0 10-4t4-10v-166Zm300 120h96q11 0 17.5-6.5T704-320v-100q0-11-6.5-17.5T680-444H570q-6 0-10 4t-4 10v180q0 6 4 10t10 4q6 0 10-4t4-10v-46Zm0-28v-92h92v92h-92Z"/>
    </Icon>
  );
});

IconMaterial5mpW100.displayName = 'OnesyIconMaterial5mpW100';

export default IconMaterial5mpW100;
