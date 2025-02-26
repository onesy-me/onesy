import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStopCircleFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StopCircleFilled'

      short_name='StopCircle'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-320h240q17 0 28.5-11.5T640-360v-240q0-17-11.5-28.5T600-640H360q-17 0-28.5 11.5T320-600v240q0 17 11.5 28.5T360-320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialStopCircleFilled.displayName = 'OnesyIconMaterialStopCircleFilled';

export default IconMaterialStopCircleFilled;
