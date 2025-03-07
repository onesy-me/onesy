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
      <path d="M212-200v-528q0-25 17.5-42.5T272-788h416q25 0 42.5 17.5T748-728v528h66q6 0 10 4t4 10q0 6-4 10t-10 4H146q-6 0-10-4t-4-10q0-6 4-10t10-4h66Zm28 0h183q-8-80-53-159.5T240-461v261Zm0-528v229q85-22 130-101.5T423-760H272q-14 0-23 9t-9 23Zm31 248q83 31 128 113t53 167h56q8-85 53-167t128-113q-84-31-129-113t-53-167h-55q-8 85-53 167T271-480Zm417-280H536q8 80 53 159.5T720-499v-229q0-14-9-23t-23-9Zm32 560v-261q-86 22-130.5 101.5T537-200h183ZM240-760v261-261Zm480 0v261-261Zm0 560v-261 261Zm-480 0v-261 261Z"/>
    </Icon>
  );
});

IconMaterialCurtainsW100.displayName = 'OnesyIconMaterialCurtainsW100';

export default IconMaterialCurtainsW100;
