import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBungalowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BungalowW100Filled'

      short_name='Bungalow'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M361.78-172q-12.78 0-21.28-8.63-8.5-8.62-8.5-21.37v-249l-42 67q-3.07 4.67-8.54 5.83Q276-377 271-380q-5-3-6-8.5t2-10.5l187-302q5-7 11.75-10.5T480-715q8 0 14 3.5t11 10.5l188 302q3 5 1.56 10.44-1.45 5.44-6.5 8.5Q683-377 677.5-378q-5.5-1-8.5-6l-41-66v248q0 12.75-8.62 21.37Q610.75-172 598-172h-90v-107.57q0-11.43-8.05-19.93T480-308q-11 0-19.5 8.5t-8.5 19.93V-172h-90.22ZM480-400q11 0 19.5-8.5T508-428q0-11-8.5-19.5T480-456q-11 0-19.5 8.5T452-428q0 11 8.5 19.5T480-400Z"/>
    </Icon>
  );
});

IconMaterialBungalowW100Filled.displayName = 'OnesyIconMaterialBungalowW100Filled';

export default IconMaterialBungalowW100Filled;
