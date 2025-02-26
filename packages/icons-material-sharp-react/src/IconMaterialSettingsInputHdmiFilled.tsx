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
      <path d="M320-80v-120L200-440v-240h40v-200h480v200h40v240L640-200v120H320Zm0-600h80v-80h40v80h80v-80h40v80h80v-120H320v120Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputHdmiFilled.displayName = 'OnesyIconMaterialSettingsInputHdmiFilled';

export default IconMaterialSettingsInputHdmiFilled;
