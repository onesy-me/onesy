import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusAlert'

      short_name='BusAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M178-720h234-234Zm62 280h-80 480-400Zm0 280v80H120v-122q-20-21-30-46.5T80-300v-380q0-89 82.5-124.5T451-840q-13 18-22.5 38T412-761q-102 2-157.5 12T178-720h225q-3 20-3 40t3 40H160v120h291q17 24 38 44.5t47 35.5H160v120q0 33 23.5 56.5T240-240h320q33 0 56.5-23.5T640-320v-83q20 3 40 3t40-3v103q0 26-10 51.5T680-202v122H560v-80H240Zm440-320q-83 0-141.5-58.5T480-680q0-82 58-141t142-59q83 0 141.5 58.5T880-680q0 83-58.5 141.5T680-480Zm-20-160h40v-160h-40v160Zm20 80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6ZM260-280q25 0 42.5-17.5T320-340q0-25-17.5-42.5T260-400q-25 0-42.5 17.5T200-340q0 25 17.5 42.5T260-280Zm280 0q25 0 42.5-17.5T600-340q0-25-17.5-42.5T540-400q-25 0-42.5 17.5T480-340q0 25 17.5 42.5T540-280Z"/>
    </Icon>
  );
});

IconMaterialBusAlert.displayName = 'OnesyIconMaterialBusAlert';

export default IconMaterialBusAlert;
