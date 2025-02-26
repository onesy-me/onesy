import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsInputComponentW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsInputComponentW100'

      short_name='SettingsInputComponent'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M167-92v-182l-75-75v-362h75v-157h28v157h75v362l-75 75v182h-28Zm299 0v-182l-75-75v-362h75v-157h28v157h75v362l-75 75v182h-28Zm299 0v-182l-75-75v-362h75v-157h28v157h75v362l-75 75v182h-28ZM120-683v196h122v-196H120Zm299 0v196h122v-196H419Zm299 0v196h122v-196H718ZM181-300l61-61v-98H120v98l61 61Zm299 0 61-61v-98H419v98l61 61Zm299 0 61-61v-98H718v98l61 61ZM181-473Zm299 0Zm299 0Z"/>
    </Icon>
  );
});

IconMaterialSettingsInputComponentW100.displayName = 'OnesyIconMaterialSettingsInputComponentW100';

export default IconMaterialSettingsInputComponentW100;
