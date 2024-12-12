import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialThermostatCarbon = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermostatCarbon'

      short_name='ThermostatCarbon'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-48 48-480l432-432 432 432L480-48Zm0-112 320-320-320-320-320 320 320 320Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialThermostatCarbon.displayName = 'OnesyIconMaterialThermostatCarbon';

export default IconMaterialThermostatCarbon;
