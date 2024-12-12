import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberSmartRecord = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberSmartRecord'

      short_name='FiberSmartRecord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200q-117 0-198.5-81.5T80-480q0-117 81.5-198.5T360-760q117 0 198.5 81.5T640-480q0 117-81.5 198.5T360-200Zm0-280Zm340 261q-23 8-41.5-1.5T640-256q0-11 7.5-21t18.5-14q60-20 97-72t37-117q0-65-37-117t-97-72q-11-4-18.5-14t-7.5-21q0-25 18-35t41-2q81 29 131 100.5T880-480q0 89-50 160T700-219Zm-340-61q83 0 141.5-58.5T560-480q0-83-58.5-141.5T360-680q-83 0-141.5 58.5T160-480q0 83 58.5 141.5T360-280Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecord.displayName = 'OnesyIconMaterialFiberSmartRecord';

export default IconMaterialFiberSmartRecord;
