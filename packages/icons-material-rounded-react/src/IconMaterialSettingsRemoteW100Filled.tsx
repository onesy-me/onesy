import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsRemoteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsRemoteW100Filled'

      short_name='SettingsRemote'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M374-66q-11 0-19.5-8.5T346-94v-452q0-11 8.5-19.5T374-574h212q11 0 19.5 8.5T614-546v452q0 11-8.5 19.5T586-66H374Zm106-346q11 0 19.5-8.5T508-440q0-11-8.5-19.5T480-468q-11 0-19.5 8.5T452-440q0 11 8.5 19.5T480-412Zm0-334q-35 0-67 10t-61 29q-5 4-11 4t-11-5q-5-5-4-10.5t6-9.5q32-23 70-34.5t78-11.5q40 0 78 11.5t70 34.5q5 4 6 9.5t-4 10.5q-5 5-11 5t-11-4q-29-19-61-29t-67-10Zm0-160q-66 0-128 21.5T239-821q-5 5-11.5 5t-11.5-5q-5-5-3-11.5t7-11.5q56-45 122-67.5T480-934q71 0 137.5 23.5T738-842q5 5 7.5 11t-2.5 11q-4 5-10.5 4.5T721-821q-51-42-113-63.5T480-906Z"/>
    </Icon>
  );
});

IconMaterialSettingsRemoteW100Filled.displayName = 'OnesyIconMaterialSettingsRemoteW100Filled';

export default IconMaterialSettingsRemoteW100Filled;
