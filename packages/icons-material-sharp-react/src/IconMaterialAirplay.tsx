import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAirplay = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Airplay'

      short_name='Airplay'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m240-120 240-240 240 240H240ZM80-200v-640h800v640H680v-80h120v-480H160v480h120v80H80Zm400-280Z"/>
    </Icon>
  );
});

IconMaterialAirplay.displayName = 'OnesyIconMaterialAirplay';

export default IconMaterialAirplay;
