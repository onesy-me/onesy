import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialE911EmergencyFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='E911EmergencyFilled'

      short_name='E911Emergency'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-80h64l96-320h240l96 320h64v80H200Zm240-480v-200h80v200h-80Zm238 99-57-57 142-141 56 56-141 142Zm42 181v-80h200v80H720ZM282-541 141-683l56-56 142 141-57 57ZM40-360v-80h200v80H40Z"/>
    </Icon>
  );
});

IconMaterialE911EmergencyFilled.displayName = 'OnesyIconMaterialE911EmergencyFilled';

export default IconMaterialE911EmergencyFilled;
