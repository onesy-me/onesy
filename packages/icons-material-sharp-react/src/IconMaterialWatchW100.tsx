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
      <path d="m398-174-30-108q-51-27-83.5-80T252-480q0-65 32.5-118t83.5-80l30-108h164l30 108q51 27 83.5 80T708-480q0 65-32.5 118T592-282l-30 108H398Zm82-106q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm-78-414q21-7 40-10.5t38-3.5q19 0 38 3.5t40 10.5l-18-64H420l-18 64Zm18 492h120l18-64q-21 7-40 10t-38 3q-19 0-38-3t-40-10l18 64Zm-18-556h156-156Zm18 556h-18 156-138Z"/>
    </Icon>
  );
});

IconMaterialWatchW100.displayName = 'OnesyIconMaterialWatchW100';

export default IconMaterialWatchW100;
