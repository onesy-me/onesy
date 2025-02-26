import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyHomeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyHomeW100'

      short_name='EmergencyHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-431h28v-200h-28v200Zm14 80q8.5 0 14.25-5.75T500-371q0-8.5-5.75-14.25T480-391q-8.5 0-14.25 5.75T460-371q0 8.5 5.75 14.25T480-351Zm0 229L122-480l358-358 358 358-358 358Zm0-38 320-320-320-320-320 320 320 320Zm0-320Z"/>
    </Icon>
  );
});

IconMaterialEmergencyHomeW100.displayName = 'OnesyIconMaterialEmergencyHomeW100';

export default IconMaterialEmergencyHomeW100;
