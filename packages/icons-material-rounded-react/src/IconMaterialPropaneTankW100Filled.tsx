import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPropaneTankW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PropaneTankW100Filled'

      short_name='PropaneTank'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-434v-166q0-45 31.5-76.5T320-708v-60q0-25 17.5-42.5T380-828h200q25 0 42.5 17.5T640-768v60q45 0 76.5 31.5T748-600v166H212Zm108 302q-45 0-76.5-31.5T212-240v-166h536v166q0 45-31.5 76.5T640-132H320Zm28-576h104q0-11 8.5-19.5T480-736q11 0 19.5 8.5T508-708h104v-60q0-14-9-23t-23-9H380q-14 0-23 9t-9 23v60Z"/>
    </Icon>
  );
});

IconMaterialPropaneTankW100Filled.displayName = 'OnesyIconMaterialPropaneTankW100Filled';

export default IconMaterialPropaneTankW100Filled;
