import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsBusW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBusW100'

      short_name='DirectionsBus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-172v-88q-20-5-44-33.5T212-360v-360q0-56.03 64.48-82.01Q340.96-828 479.97-828 624-828 686-803.03q62 24.98 62 83.03v360q0 38-24 66.5T680-260v88h-28v-80H308v80h-28Zm200-560h240-480 240Zm160 252H240h480-80Zm-400-28h480v-196H240v196Zm100.24 168q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm280 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM240-732h480q-9-35-64-51.5T480-800q-121 0-176 16.5T240-732Zm80 452h320q33 0 56.5-23.5T720-360v-120H240v120q0 33 23.5 56.5T320-280Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBusW100.displayName = 'OnesyIconMaterialDirectionsBusW100';

export default IconMaterialDirectionsBusW100;
