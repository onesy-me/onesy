import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdCardAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertW100'

      short_name='SdCardAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-132q-26 0-43-17t-17-43v-401q0-12 5-23.5t13-19.5l174-174q8-8 19.5-13t23.5-5h241q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Zm0-28h416q12 0 22-10t10-22v-576q0-12-10-22t-22-10H434L240-606v414q0 12 10 22t22 10Zm208-160q11 0 17.5-7.5T504-344q0-9-6.5-16.5T480-368q-11 0-17.5 7.5T456-344q0 9 6.5 16.5T480-320Zm0-98q6 0 10-4t4-10v-154q0-6-4-10t-10-4q-6 0-10 4t-4 10v154q0 6 4 10t10 4ZM272-160h-32 480-448Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertW100.displayName = 'OnesyIconMaterialSdCardAlertW100';

export default IconMaterialSdCardAlertW100;
