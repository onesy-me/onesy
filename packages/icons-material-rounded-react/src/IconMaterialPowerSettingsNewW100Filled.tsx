import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerSettingsNewW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNewW100Filled'

      short_name='PowerSettingsNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-454v-328q0-6 4-10t10-4q6 0 10 4t4 10v328q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm14 282q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-65 26.5-123T272-705q5-5 11-5.5t11 4.5q5 5 3.5 10.5T291-685q-44 38-67.5 91.5T200-480q0 116 82 198t198 82q117 0 198.5-82T760-480q0-60-23-113.5T670-685q-5-5-7-10.5t3-10.5q5-5 11-4.5t11 5.5q48 44 74 102t26 123q0 64-24 120t-66 98q-42 42-98 66t-120 24Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNewW100Filled.displayName = 'OnesyIconMaterialPowerSettingsNewW100Filled';

export default IconMaterialPowerSettingsNewW100Filled;
