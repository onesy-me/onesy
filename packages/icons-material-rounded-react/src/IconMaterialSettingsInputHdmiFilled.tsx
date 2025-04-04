import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsInputHdmiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputHdmiFilled'

      short_name='SettingsInputHdmi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-80q-33 0-56.5-23.5T320-160v-40L208-423q-5-8-6.5-17.5T200-459v-141q0-22 11-40t29-29v-131q0-33 23.5-56.5T320-880h320q33 0 56.5 23.5T720-800v131q18 11 29 29t11 40v141q0 9-1.5 18.5T752-423L640-200v40q0 33-23.5 56.5T560-80H400Zm-80-600h80v-60q0-8 6-14t14-6q8 0 14 6t6 14v60h80v-60q0-8 6-14t14-6q8 0 14 6t6 14v60h80v-120H320v120Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmiFilled.displayName = 'OnesyIconMaterialSettingsInputHdmiFilled';

export default IconMaterialSettingsInputHdmiFilled;
