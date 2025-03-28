import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCurtainsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurtainsW100'

      short_name='Curtains'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H132Zm108-28h183q-8-80-53-159.5T240-461v261Zm0-560v261q85-22 130-101.5T423-760H240Zm31 280q83 31 128 113t53 167h56q8-85 53-167t128-113q-84-31-129-113t-53-167h-55q-8 85-53 167T271-480Zm449-280H536q8 80 53 159.5T720-499v-261Zm0 560v-261q-86 22-130.5 101.5T537-200h183ZM240-760v261-261Zm480 0v261-261Zm0 560v-261 261Zm-480 0v-261 261Z"/>
    </Icon>
  );
});

IconMaterialCurtainsW100.displayName = 'OnesyIconMaterialCurtainsW100';

export default IconMaterialCurtainsW100;
