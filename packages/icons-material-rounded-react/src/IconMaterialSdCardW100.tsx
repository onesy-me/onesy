import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardW100'

      short_name='SdCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M404-532q6 0 10-4t4-10v-102q0-6-4-10t-10-4q-6 0-10 4t-4 10v102q0 6 4 10t10 4Zm110 0q6 0 10-4t4-10v-102q0-6-4-10t-10-4q-6 0-10 4t-4 10v102q0 6 4 10t10 4Zm110 0q6 0 10-4t4-10v-102q0-6-4-10t-10-4q-6 0-10 4t-4 10v102q0 6 4 10t10 4ZM272-132q-26 0-43-17t-17-43v-401q0-12 5-23.5t13-19.5l174-174q8-8 19.5-13t23.5-5h241q26 0 43 17t17 43v576q0 26-17 43t-43 17H272Zm0-28h416q12 0 22-10t10-22v-576q0-12-10-22t-22-10H434L240-606v414q0 12 10 22t22 10Zm0 0h-32 480-448Z"/>
    </Icon>
  );
});

IconMaterialSdCardW100.displayName = 'OnesyIconMaterialSdCardW100';

export default IconMaterialSdCardW100;
