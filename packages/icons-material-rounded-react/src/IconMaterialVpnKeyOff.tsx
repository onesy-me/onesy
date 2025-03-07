import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVpnKeyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VpnKeyOff'

      short_name='VpnKeyOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M763-84 486-360q-32 54-85.5 87T280-240q-100 0-170-70T40-480q0-66 32-121t86-87l-75-75q-12-12-12-28.5T83-820q12-12 28.5-12t28.5 12l680 680q12 12 12 28t-12 28q-12 12-28.5 12T763-84Zm-83-309-47-47h47v47Zm138 136-58-56v-127h80v-80H553l-80-80h367q33 0 56.5 23.5T920-520v80q0 33-23.5 56.5T840-360v47q0 18-6.5 32T818-257Zm-538-63q65 0 99.5-35t49.5-63L219-628q-44 18-71.5 57.5T120-480q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm309-84Zm-314 10Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyOff.displayName = 'OnesyIconMaterialVpnKeyOff';

export default IconMaterialVpnKeyOff;
