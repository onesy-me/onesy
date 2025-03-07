import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWatchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchW100Filled'

      short_name='Watch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M444-174q-20 0-36.5-12T386-218l-18-64q-51-27-83.5-80T252-480q0-65 32.5-118t83.5-80l18-64q5-20 21.5-32t36.5-12h83q16 0 27.5 9.5T571-752l21 74q51 27 83.5 80T708-480q0 65-32.5 118T592-282l-18 64q-5 20-21.5 32T516-174h-72Zm36-106q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Z"/>
    </Icon>
  );
});

IconMaterialWatchW100Filled.displayName = 'OnesyIconMaterialWatchW100Filled';

export default IconMaterialWatchW100Filled;
