import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWifiTetheringW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WifiTetheringW100'

      short_name='WifiTethering'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M241-187q-51-48-80-112.89-29-64.9-29-139.81 0-72.3 27.39-135.86 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-788 479.83-788q72.17 0 135.73 27.42 63.56 27.41 110.57 74.41 47.02 47 74.44 110.54Q828-512.09 828-439.85 828-365 799-300t-80 113l-19-20q46-43.81 73-104.05 27-60.24 27-128.95 0-134-93-227t-227-93q-134 0-227 93t-93 227q0 69 27 129t74 104l-20 20Zm113-113q-29-26-45.5-62.02T292-440q0-78.33 54.76-133.17 54.77-54.83 133-54.83Q558-628 613-573.05q55 54.95 55 133.45 0 41.6-16.5 77.6-16.5 36-45.5 62l-20-20q25-23 39.5-54t14.5-66q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 36 14.5 66.5T374-320l-20 20Zm126-112q-11 0-19.5-8.5T452-440q0-11 8.5-19.5T480-468q11 0 19.5 8.5T508-440q0 11-8.5 19.5T480-412Z"/>
    </Icon>
  );
});

IconMaterialWifiTetheringW100.displayName = 'OnesyIconMaterialWifiTetheringW100';

export default IconMaterialWifiTetheringW100;
