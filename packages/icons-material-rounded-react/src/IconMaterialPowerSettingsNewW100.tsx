import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerSettingsNewW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNewW100'

      short_name='PowerSettingsNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-454v-328q0-6 4-10t10-4q6 0 10 4t4 10v328q0 6-4 10t-10 4q-6 0-10-4t-4-10Zm14 282q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-65 26.5-123T272-705q5-5 10.5-6t10.5 4q5 5 3.5 10.5T290-686q-43 39-66.5 92.5T200-480q0 116 82 198t198 82q117 0 198.5-82T760-480q0-60-23-113.5T670-686q-5-5-6.5-10.5T667-707q5-5 10.5-4t10.5 6q48 44 74 102t26 123q0 64-24 120t-66 98q-42 42-98 66t-120 24Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNewW100.displayName = 'OnesyIconMaterialPowerSettingsNewW100';

export default IconMaterialPowerSettingsNewW100;
