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
      <path d="M346-66v-508h268v508H346Zm134-346q11 0 19.5-8.5T508-440q0-11-8.5-19.5T480-468q-11 0-19.5 8.5T452-440q0 11 8.5 19.5T480-412ZM340-698l-20-20q34-28 75-42t85-14q44 0 85 14t75 42l-20 20q-30-23-66-35.5T480-746q-38 0-74 12.5T340-698ZM226-810l-20-22q57-50 127.5-76T480-934q75 0 145.5 26.5T752-830l-18 20q-53-47-118-71.5T480-906q-71 0-136 24.5T226-810Z"/>
    </Icon>
  );
});

IconMaterialSettingsRemoteW100Filled.displayName = 'OnesyIconMaterialSettingsRemoteW100Filled';

export default IconMaterialSettingsRemoteW100Filled;
