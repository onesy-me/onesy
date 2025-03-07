import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurtainsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsW100Filled'

      short_name='Curtains'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-200v-528q0-24.75 17.63-42.38Q247.25-788 272-788h416q24.75 0 42.38 17.62Q748-752.75 748-728v528h66q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H146q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4h66Zm59-280q83 31 128 113t53 167h56q8-85 53-167t128-113q-84-31-129-113t-53-167h-55q-8 85-53 167T271-480Z"/>
    </Icon>
  );
});

IconMaterialCurtainsW100Filled.displayName = 'OnesyIconMaterialCurtainsW100Filled';

export default IconMaterialCurtainsW100Filled;
