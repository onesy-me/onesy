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
      <path d="M791-55 486-360q-32 54-85.5 87T280-240q-100 0-170-70T40-480q0-66 32-121t86-87L55-791l57-57 736 736-57 57ZM680-393l-47-47h47v47Zm160 160-80-80v-127h80v-80H553l-80-80h447v240h-80v127Zm-560-87q65 0 99.5-35t49.5-63L219-628q-44 18-71.5 57.5T120-480q0 66 47 113t113 47Zm0-80q-33 0-56.5-23.5T200-480q0-33 23.5-56.5T280-560q33 0 56.5 23.5T360-480q0 33-23.5 56.5T280-400Zm309-84Zm-314 10Z"/>
    </Icon>
  );
});

IconMaterialVpnKeyOff.displayName = 'OnesyIconMaterialVpnKeyOff';

export default IconMaterialVpnKeyOff;
