import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsBusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsBusW100Filled'

      short_name='DirectionsBus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M308-172h-28v-88q-20-5-44-33.5T212-360v-360q0-56.03 64.48-82.01Q340.96-828 479.97-828 624-828 686-803.03q62 24.98 62 83.03v360q0 38-24 66.5T680-260v88h-28v-80H308v80Zm-68-336h480v-196H240v196Zm100.24 168q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm280 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsBusW100Filled.displayName = 'OnesyIconMaterialDirectionsBusW100Filled';

export default IconMaterialDirectionsBusW100Filled;
