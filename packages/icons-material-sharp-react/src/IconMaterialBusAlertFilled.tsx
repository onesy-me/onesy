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
      <path d="M680-480q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm-20-160h40v-160h-40v160Zm20 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM260-280q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm280 0q25 0 42.5-17.5T600-340q0-25-17.5-42.5T540-400q-25 0-42.5 17.5T480-340q0 25 17.5 42.5T540-280ZM120-80v-122q-20-21-30-46.5T80-300v-380q0-89 82.5-124.5T451-840q-24 34-37.5 74.5T400-680q0 11 .5 20.5T403-640H160v120h291q38 54 97.5 87T680-400q11 0 20.5-.5T720-403v103q0 26-10 51.5T680-202v122H560v-80H240v80H120Z"/>
    </Icon>
  );
});

IconMaterialBusAlertFilled.displayName = 'OnesyIconMaterialBusAlertFilled';

export default IconMaterialBusAlertFilled;
