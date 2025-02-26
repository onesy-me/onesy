import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusAlertFilled'

      short_name='BusAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-640q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Zm0 160q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM260-280q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm280 0q25 0 42.5-17.5T600-340q0-25-17.5-42.5T540-400q-25 0-42.5 17.5T480-340q0 25 17.5 42.5T540-280ZM180-80q-25 0-42.5-17.5T120-140v-62q-20-21-30-46.5T80-300v-380q0-72 66.5-110T362-837q29-2 45 22.5t5 53.5q-6 20-9 41.5t-3 42.5q0 15-9.5 26T366-640H160v120h260q14 0 27 6.5t22 17.5q17 20 37 35.5t43 27.5q32 17 66.5 25.5T686-400q14 0 24 8.5t10 22.5v69q0 26-10 51.5T680-202v62q0 25-17.5 42.5T620-80q-25 0-42.5-17.5T560-140v-20H240v20q0 25-17.5 42.5T180-80Z"/>
    </Icon>
  );
});

IconMaterialBusAlertFilled.displayName = 'OnesyIconMaterialBusAlertFilled';

export default IconMaterialBusAlertFilled;
