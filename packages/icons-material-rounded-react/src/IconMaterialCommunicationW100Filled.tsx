import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCommunicationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommunicationW100Filled'

      short_name='Communication'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M66-346v-2q0-41 52.5-53.5T200-414q29 0 81.5 12.5T334-348v2H66Zm134-160q-23 0-38.5-15.5T146-560q0-23 15.5-38.5T200-614q23 0 38.5 15.5T254-560q0 23-15.5 38.5T200-506Zm206 65q-5.6 0-9.8-4.2-4.2-4.2-4.2-9.8 0-4 4-10 7-11 9-25t2-28.81q0-14.81-2.5-29T395-572q-1.78-2.29-2.89-4.8t-1.11-5.26q0-5.94 4-9.94 4-4 10.5-4 4 0 7.25 2.5T418-587q8 14 12.5 31.72T435-519q0 19.21-4 37.1-4 17.9-12 31.9-2.22 3.6-5.11 6.3Q411-441 406-441Zm76 75q-5.87 0-9.94-4.01-4.06-4.02-4.06-10.16 0-2.83 1.11-5.24 1.11-2.4 2.89-4.59 23-29 33.5-62t10.5-68q0-35-10.5-68T472-649q-1.78-2.35-2.89-4.71-1.11-2.35-1.11-5.17 0-6.12 3.97-10.12 3.96-4 10.03-4 3.68 0 6.84 1.5Q492-670 494-667q25.38 31.97 37.69 69.98Q544-559 544-520.12q0 38.89-12.5 76.5Q519-406 494-373q-2 3-5.06 5-3.05 2-6.94 2Zm144 20v-2q0-41 52.5-53.5T760-414q29 0 81.5 12.5T894-348v2H626Zm134-160q-23 0-38.5-15.5T706-560q0-23 15.5-38.5T760-614q23 0 38.5 15.5T814-560q0 23-15.5 38.5T760-506Z"/>
    </Icon>
  );
});

IconMaterialCommunicationW100Filled.displayName = 'OnesyIconMaterialCommunicationW100Filled';

export default IconMaterialCommunicationW100Filled;
