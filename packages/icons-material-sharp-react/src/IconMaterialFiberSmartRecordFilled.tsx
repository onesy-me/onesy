import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFiberSmartRecordFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FiberSmartRecordFilled'

      short_name='FiberSmartRecord'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-200q-117 0-198.5-81.5T80-480q0-117 81.5-198.5T360-760q117 0 198.5 81.5T640-480q0 117-81.5 198.5T360-200Zm280-4v-80q70-14 115-69t45-127q0-72-45-127t-115-69v-80q104 14 172 92.5T880-480q0 105-68 183.5T640-204Z"/>
    </Icon>
  );
});

IconMaterialFiberSmartRecordFilled.displayName = 'OnesyIconMaterialFiberSmartRecordFilled';

export default IconMaterialFiberSmartRecordFilled;
