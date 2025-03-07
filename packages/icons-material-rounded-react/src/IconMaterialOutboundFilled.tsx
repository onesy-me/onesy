import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutboundFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OutboundFilled'

      short_name='Outbound'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M560-504v50q0 17 11.5 28.5T600-414q17 0 28.5-11.5T640-454v-146q0-17-11.5-28.5T600-640H454q-17 0-28.5 11.5T414-600q0 17 11.5 28.5T454-560h49L328-385q-11 11-11 27.5t11 28.5q12 12 28.5 12t28.5-12l175-175ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialOutboundFilled.displayName = 'OnesyIconMaterialOutboundFilled';

export default IconMaterialOutboundFilled;
