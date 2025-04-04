import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPowerSettingsNew = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerSettingsNew'

      short_name='PowerSettingsNew'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-440v-400h80v400h-80Zm40 320q-74 0-139.5-28.5T226-226q-49-49-77.5-114.5T120-480q0-80 33-151t93-123l56 56q-48 40-75 97t-27 121q0 116 82 198t198 82q117 0 198.5-82T760-480q0-64-26.5-121T658-698l56-56q60 52 93 123t33 151q0 74-28.5 139.5t-77 114.5q-48.5 49-114 77.5T480-120Z"/>
    </Icon>
  );
});

IconMaterialPowerSettingsNew.displayName = 'OnesyIconMaterialPowerSettingsNew';

export default IconMaterialPowerSettingsNew;
