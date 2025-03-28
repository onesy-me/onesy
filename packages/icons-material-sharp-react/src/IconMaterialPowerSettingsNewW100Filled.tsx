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
      <path d="M466-440v-356h28v356h-28Zm14 268q-64 0-120-24t-98-66q-42-42-66-98t-24-120q0-69 30-130.5T284-716l20 20q-50 38-77 95t-27 121q0 116 82 198t198 82q117 0 198.5-82T760-480q0-64-26.5-121T656-696l20-20q53 44 82.5 105.5T788-480q0 64-24 120t-66 98q-42 42-98 66t-120 24Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNewW100Filled.displayName = 'OnesyIconMaterialPowerSettingsNewW100Filled';

export default IconMaterialPowerSettingsNewW100Filled;
