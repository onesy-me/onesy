import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFanFocus = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FanFocus'

      short_name='FanFocus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-80 340-220l56-56 44 43v-247h80v247l44-43 56 56L480-80ZM240-240 100-380l56-56 44 43v-247h80v247l44-43 56 56-140 140Zm480 0L580-380l56-56 44 43v-247h80v247l44-43 56 56-140 140ZM80-520v-320h800v320h-80v-240H160v240H80Z"/>
    </Icon>
  );
});

IconMaterialFanFocus.displayName = 'OnesyIconMaterialFanFocus';

export default IconMaterialFanFocus;
