import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchW100'

      short_name='Watch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M421-174q-9.79 0-17.89-5.98-8.1-5.98-11.11-16.02l-24-86q-51-27-83.5-80T252-480q0-65 32.5-118t83.5-80l24-86q3.01-10.04 11.11-16.02T421-786h118q9.79 0 17.89 5.98 8.1 5.98 11.11 16.02l24 86q51 27 83.5 80T708-480q0 65-32.5 118T592-282l-24 86q-3.01 10.04-11.11 16.02T539-174H421Zm59-106q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-78-414q21-7 39.83-10.5T480-708q19.34 0 38.17 3.5Q537-701 558-694l-18-64H420l-18 64Zm18 492h120l18-64q-21 7-39.83 10T480-253q-19.34 0-38.17-3Q423-259 402-266l18 64Zm-18-556h156-156Zm18 556h-18 156-138Z"/>
    </Icon>
  );
});

IconMaterialWatchW100.displayName = 'OnesyIconMaterialWatchW100';

export default IconMaterialWatchW100;
